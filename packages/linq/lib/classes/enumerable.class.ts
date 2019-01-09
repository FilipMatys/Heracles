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
}