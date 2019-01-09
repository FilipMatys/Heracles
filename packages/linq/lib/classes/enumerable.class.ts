// Interfaces
import { IEnumerable } from "../interfaces/enumerable.interface";
import { IEnumerator } from "../interfaces/enumerator.interface";

// Classes
import { Enumerator } from "./enumerator.class";

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
    public from<V>(data?: V[] | number | string): IEnumerable<V | number | string> {
        // Get enumerable from given data
        return Enumerable.from(data);
    }

    /**
     * Create enumerable from given data
     * @param data 
     */
    public static from<V>(data?: V[] | number | string): IEnumerable<V | number | string> {
        // Check for array
        if (data instanceof Array) {
            return new Enumerable<V>(data);
        }
        // Check for number
        else if (typeof data === "number") {
            return new Enumerable<number>([data]);
        }
        // Check for string
        else if (typeof data === "string") {
            return new Enumerable<string>(data.split(""));
        }

        // Return null as none of the above successed
        return null;
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
        return this.from(data);
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
        return this.from(data);
    }
}