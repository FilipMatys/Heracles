// Interfaces
import { IEnumerable } from "../interfaces/enumerable.interface";
import { IEnumerator } from "../interfaces/enumerator.interface";

// Classes
import { Enumerator } from "./enumerator.class";
import { InvalidOperationError } from "../errors/invalid-operation.error";

/**
 * Enumerable class
 */
export class Enumerable<T> implements IEnumerable<T> {

    /**
     * Data
     */
    private _data: T[];

    /**
     * Constructor
     */
    constructor(data?: T[]) {
        // Init data
        this._data = data || [];
    }

    /**
     * Get enumerator
     */
    public getEnumerator(): IEnumerator<T> {
        // Create enumerator
        return new Enumerator(this._data);
    }

    /**
     * Create enumerable from given data
     * @param data 
     */
    public from<V>(data?: V[] | V): IEnumerable<V> {
        // Get enumerable from given data
        return Enumerable.from<V>(data);
    }

    /**
     * Create enumerable from given data
     * @param data 
     */
    public static from<V>(data?: V[] | V): IEnumerable<V> {
        // Check for array
        if (data instanceof Array) {
            return new Enumerable<V>(data);
        }
        // Check for number
        else if (typeof data === "number") {
            return new Enumerable<V>([data]);
        }
        // Check for string
        else if (typeof data === "string") {
            return new Enumerable<V>([data]);
        }

        // Return empty as none of the above successed
        return new Enumerable<V>();
    }

    /**
     * Execute given function for each item
     * @param func 
     */
    public forEach(func: (item: T, index: number) => void): void {
        // Get enumerator
        let enumerator: IEnumerator<T> = this.getEnumerator();

        // Init index
        let index: number = 0;

        // Iterate enumerator
        while (enumerator.moveNext()) {
            // Execute given function
            func(enumerator.current, index++);
        }
    }

    /**
     * Aggregate items by given function
     * @param func 
     * @param seed 
     */
    public aggregate<V>(func: (result: V, next: T) => V, seed: V): V {
        // Init data
        let data: V = seed;

        // Iterate items
        this.forEach((item) => data = func(data, item));

        // Return result
        return data;
    }

    /**
     * Check whether all items satisfy the function
     * @param func 
     */
    public all(func: (item: T) => boolean): boolean {
        // Init result
        let result: boolean = true;

        // Init break exception
        let BreakException = {};

        try {
            // Iterate data
            this.forEach((item) => {
                // Check if item satisfies function 
                if (!func(item)) {
                    // Throw break exception
                    throw BreakException;
                }
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }

            // Item that does not fit was found
            result = false;
        }
        finally {
            // Return result
            return result;
        }
    }

    /**
     * 
     * @param func 
     */
    public any(func?: (item: T) => boolean): boolean {
        // Init result
        let result: boolean = false;

        // Init break exception
        let BreakException = {};

        try {
            // Iterate data
            this.forEach((item) => {
                // Check if item satisfies function 
                if (func ? func(item) : true) {
                    // Throw break exception
                    throw BreakException;
                }
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }

            // Item that does not fit was found
            result = true;
        }
        finally {
            // Return result
            return result;
        }
    }

    /**
     * Append item
     * @param item 
     */
    public append(item: T): IEnumerable<T> {
        // Add item to data
        this._data.push(item);

        // Return reference to this
        return this;
    }

    /**
     * Return current implementation as inumerable
     */
    public asEnumerable(): IEnumerable<T> {
        // Init data
        let data: T[];

        // Iterate items
        this.forEach((item) => data.push(item));

        // Return enumerable
        return new Enumerable<T>(data);
    }

    /**
     * Get average
     * @param select 
     */
    public average(select?: (item: T) => number): number {
        // Init sum and length
        let sum: number = 0;
        let length: number = 0;

        // Iterate items
        this.forEach((item) => {
            // Check if select is set
            sum += select ? select(item) : <number>(item as any);
        });

        // Get average
        return sum / length;
    }

    /**
     * Concatenate enumerables
     * @param source 
     */
    public concat(source: IEnumerable<T>): IEnumerable<T> {
        // Init data
        let data: T[] = [];

        // Iterate this enumerable
        this.forEach((item) => data.push(item));
        // Iterate source enumerable
        source.forEach((item) => data.push(item));

        // Create new enumerable
        return this.from<T>(data);
    }

    /**
     * Check whether enumerable contains given item
     * @param item 
     * @param cmp 
     */
    public contains(item: T, cmp?: (a: T, b: T) => boolean): boolean {
        // Init result
        let result: boolean = false;

        // Init break exception
        let BreakException = {};

        try {
            // Iterate items
            this.forEach((itm) => {
                // Check if item satisfies function 
                if (cmp ? cmp(item, itm) : item === itm) {
                    // Throw break exception
                    throw BreakException;
                }
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }

            // Item that does not fit was found
            result = true;
        }
        finally {
            // Return result
            return result;
        }
    }

    /**
     * Get number of elements
     * @param func 
     */
    public count(func?: (item: T) => boolean): number {
        // Init count
        let count: number = 0;

        // Iterate items
        this.forEach((item) => {
            // Check whether to increase count
            if ((func && func(item)) || !func) {
                count++;
            }
        });

        // Return count
        return count;
    }

    /**
     * Get default enumerable if current is empty
     * @param def 
     */
    public defaultIfEmpty(def?: IEnumerable<T>): IEnumerable<T> {
        // Check if current enumerable is empty
        if (!this.isEmpty()) {
            return this;
        }

        // Otherwise return new enumerable
        return def ? def : this.from<T>([]);
    }

    /**
     * Get distinct enumerable
     * @param cmp 
     */
    public distinct(cmp?: (a: T, b: T) => boolean): IEnumerable<T> {
        // Init new enumerable
        let result: IEnumerable<T> = this.from<T>([]);

        // Iterate items
        this.forEach((item) => {
            // Check if item is already in
            if (!result.contains(item, cmp)) {
                // Add item to enumerable
                result.append(item);
            }
        });

        // Return result
        return result;
    }

    /**
     * Get first element
     * @param func 
     */
    public first(func?: (item: T) => boolean): T {
        // Init result
        let result: T;

        // Init break exception
        let BreakException = {};

        try {
            // Iterate items
            this.forEach((item) => {
                // Check whether it is the item we want
                if ((func && func(item)) || !func) {
                    // Assign item
                    result = item;

                    // Break iteration
                    throw BreakException;
                }
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }

        }
        finally {
            // Check if any element was found
            if (!result) {
                throw new InvalidOperationError("No matching element was found");
            }

            // Return result
            return result;
        }
    }

    /**
     * Get first or default
     * @param def 
     * @param func 
     */
    public firstOrDefault(def: T, func?: (item: T) => boolean): T {
        // Init result
        let result: T;

        // Init break exception
        let BreakException = {};

        try {
            // Iterate items
            this.forEach((item) => {
                // Check whether it is the item we want
                if ((func && func(item)) || !func) {
                    // Assign item
                    result = item;

                    // Break iteration
                    throw BreakException;
                }
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }
        }
        finally {
            // Check if any element was found
            if (!result) {
                // Assign default value
                result = def;
            }

            // Return result
            return result;
        }
    }

    /**
     * Check whether enumerable is empty
     */
    public isEmpty(): boolean {
        // Init result
        let result: boolean = false;

        try {
            // Try to get first
            this.first();
        }
        catch (e) {
            // First raised exception, so there is no item
            result = true;
        }
        finally {
            // Return result
            return result;
        }
    }

    /**
     * Get last element that satisfies the confidion
     * @param func 
     */
    public last(func?: (item: T) => boolean): T {
        // Init result
        let result: T;

        // Iterate items
        this.forEach((item) => {
            // Check whether item satisfies
            if (!func || (func && func(item))) {
                // Assign item
                result = item;
            }
        });

        // Check if any element was found
        if (!result) {
            throw new InvalidOperationError("No matching element was found");
        }

        // Return result
        return result;
    }

    /**
     * Get last element that satisfies the condition 
     * or default
     * @param def 
     * @param func 
     */
    public lastOrDefault(def: T, func?: (item: T) => boolean): T {
        // Init result
        let result: T;

        // Iterate items
        this.forEach((item) => {
            // Check whether item satisfies
            if (!func || (func && func(item))) {
                // Assign item
                result = item;
            }
        });

        // Check if any element was found
        if (!result) {
            result = def;
        }

        // Return result
        return result;
    }

    /**
     * Get maximum value from enumerable
     * @param cmp 
     */
    public max(cmp?: (a: T, b: T) => T): T {
        // Init result
        let result: T;

        // Iterate items
        this.forEach((item) => {
            // Check if result is set
            if (typeof result === "undefined") {
                // Assign max item
                result = item;
            }
            else {
                // Assign proper result
                result = cmp ? cmp(result, item) : ((result > item) ? result : item);
            }
        });

        // Check if any result was found
        if (!result) {
            throw new InvalidOperationError("No max was found");
        }

        // Return result
        return result;
    }

    /**
     * Get minimum from enumerable
     * @param cmp 
     */
    public min(cmp?: (a: T, b: T) => T): T {
        // Init result
        let result: T;

        // Iterate items
        this.forEach((item) => {
            // Check if result is set
            if (typeof result === "undefined") {
                // Assign min item
                result = item;
            }
            else {
                // Assign proper result
                result = cmp ? cmp(result, item) : ((result < item) ? result : item);
            }
        });

        // Check if any result was found
        if (!result) {
            throw new InvalidOperationError("No min was found");
        }

        // Return result
        return result;
    }

    /**
     * Order sequence by
     * @param select 
     * @param cmp 
     */
    public orderBy<V>(select: (item: T) => V, cmp: (a: V, b: V) => number): IEnumerable<T> {
        // Init result
        let result: T[] = [];

        // Get all items
        this.forEach((item) => result.push(item));

        // Sort data
        return this.from<T>(result.sort((a, b) => cmp(select(a), select(b))));
    }

    /**
     * Generate enumerable from given range
     * @param from 
     * @param to 
     */
    public static range(from: number, to: number): IEnumerable<number> {
        // Init data
        let data: number[] = [];

        // Fill data
        for (let index = from; index <= to; index++) {
            data.push(index);
        }

        // Create enumerable
        return this.from<number>(data);
    }

    /**
     * Generate enumerable by repeating given item
     * @param item 
     * @param count 
     */
    public static repeat<V>(item: V, count: number): IEnumerable<V> {
        // Init data
        let data: V[] = [];

        // Fill data
        for (let index = 0; index < count; index++) {
            data.push(item);
        }

        // Return enumerable
        return this.from<V>(data);
    }

    /**
     * Get reversed enumerable
     * @description Keeps original unmodified
     */
    public reverse(): IEnumerable<T> {
        // Init data
        let data: T[] = [];

        // Iterate items
        this.forEach((item) => data.unshift(item))

        // Return new enumerable
        return this.from<T>(data);
    }

    /**
     * Project enumerable items  
     * @param func 
     */
    public select<V>(func: (item: T, index?: number) => V): IEnumerable<V> {
        // Init data
        let data: V[] = [];

        // Iterate items
        this.forEach((item, index) => data.push(func(item, index)));

        // Return new enumerable
        return this.from<V>(data);
    }

    /**
     * Select nested items with projection
     * @param select 
     * @param func 
     */
    public selectMany<U, V>(select: (item: T) => U[], func?: (item: T, selected: U) => V): IEnumerable<V> {
        // Init data
        let data: V[] = [];

        // Iterate items
        this.forEach((item) => {
            // Get nested items and add them to resulting array
            select(item).forEach((nested) => func ? data.push(func(item, nested)) : nested);
        });


        // Return new enumerable
        return this.from<V>(data);
    }

    /**
     * Returns single element
     * @param func 
     */
    public single(func?: (item: T) => boolean): T {
        // Init result
        let result: T;
        let count: number = 0;

        // Iterate items
        this.forEach((item) => {
            // Check whether item satisfies
            if ((func && func(item)) || !func) {
                // Assign item as a result
                result = item;

                // Increase count
                count++;
            }

            // Now check count
            if (count > 1) {
                throw new InvalidOperationError("Sequence contains more than one element.");
            }
        });

        // Check if any result was found
        if (!result) {
            throw new InvalidOperationError("No matching element was found");
        }

        // Return result
        return result;
    }

    /**
     * Returns single or default element
     * @param def 
     * @param func 
     */
    public singleOrDefault(def: T, func?: (item: T) => boolean): T {
        // Init result
        let result: T;
        let count: number = 0;

        // Iterate items
        this.forEach((item) => {
            // Check whether item satisfies
            if ((func && func(item)) || !func) {
                // Assign item as a result
                result = item;

                // Increase count
                count++;
            }

            // Now check count
            if (count > 1) {
                throw new InvalidOperationError("Sequence contains more than one element.");
            }
        });

        // Check if any result was found
        if (!result) {
            // Assign default value if no item was found
            result = def;
        }

        // Return result
        return result;
    }

    /**
     * Get sum of items transformed by given function
     * @param func 
     */
    public sum(func?: (item: T) => number): number {
        // Init sum
        let sum: number = 0;

        // Iterate items
        this.forEach((item) => sum += (func ? func(item) : <number>(item as any)));

        // Return result
        return sum;
    }

    /**
     * Skip given number of elements
     * @param count 
     */
    public skip(count: number): IEnumerable<T> {
        // Init data
        let data: T[] = [];

        // Iterate items
        this.forEach((item, index) => {
            if (count > index) {
                return;
            }

            // Add item to list
            data.push(item);
        });

        // Return new enumerable
        return this.from<T>(data);
    }

    /**
     * Skip elements while condition satisfies
     * @param func 
     */
    public skipWhile(func: (item: T) => boolean): IEnumerable<T> {
        // Init result
        let result: T[] = [];
        let skip: boolean = true;

        // Iterate items
        this.forEach((item) => {
            // Check for skip
            if (skip) {
                // Assign new skip
                skip = func(item);
            }

            // Assign skip
            if (!skip) {
                // Add item
                result.push(item);
            }
        });

        // Return new enumerable
        return this.from<T>(result);
    }

    /**
     * Take first {count} elements
     * @param count 
     */
    public take(count: number): IEnumerable<T> {
        // Init result
        let result: T[] = [];

        // Init break exception
        var BreakException = {};

        try {
            // Iterate items
            this.forEach((item, index) => {
                // Check index
                if (index >= count) {
                    // Break iteration
                    throw BreakException;
                }

                // Add item to result
                result.push(item);
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }
        }
        finally {
            // Return new enumerable
            return this.from<T>(result);
        }
    }

    /**
     * Take while
     * @param func 
     */
    public takeWhile(func: (item: T) => boolean): IEnumerable<T> {
        // Init result
        let result: T[] = [];

        // Init break exception
        var BreakException = {};

        try {
            // Iterate items
            this.forEach((item) => {
                // Check condition
                if (!func(item)) {
                    // Break iteration
                    throw BreakException;
                }

                // Add item to result
                result.push(item);
            });
        }
        catch (e) {
            // Check exception
            if (e !== BreakException) {
                throw e;
            }
        }
        finally {
            // Return new enumerable
            return this.from<T>(result);
        }
    }

    /**
     * Convert to array
     */
    public toArray(): T[] {
        // Init result
        let result: T[] = [];

        // Iterate items
        this.forEach(item => result.push(item));

        // Return result
        return result;
    }

    /**
     * Get items that satisfy the function
     * @param func 
     */
    public where(func: (item: T, index?: number) => boolean): IEnumerable<T> {
        // Init data
        let data: T[] = [];

        // Iterate items
        this.forEach((item, index) => {
            // Check item with index
            if (func(item, index)) {
                data.push(item);
            }
        });

        // Create new enumerable
        return this.from<T>(data);
    }
}