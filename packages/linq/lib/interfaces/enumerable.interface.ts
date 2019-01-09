// Interfaces
import { IEnumerator } from "./enumerator.interface";

/**
 * Enumerable interface
 */
export interface IEnumerable<T> {

    /**
     * Get enumerable enumerator
     */
    getEnumerator(): IEnumerator<T>;

    /**
     * For each function
     * @param func 
     */
    forEach(func: (item: T, index?: number) => void): void;

    /**
     * Check whether all items satisfy the function
     * @param func 
     */
    all(func: (item: T) => boolean): boolean;

    /**
     * Check whether enumerable has any elements
     */
    any(): boolean;

    /**
     * Check whether there are any elements satifiyng the function
     * @param func 
     */
    any(func: (item: T) => boolean): boolean;

    /**
     * Append item
     * @param item 
     */
    append(item: T): IEnumerable<T>;

    /**
     * Return current implementation enumerable
     */
    asEnumerable(): IEnumerable<T>;

    /**
     * Calculate average
     */
    average(): number;

    /**
     * Calculate average of given property
     * @param select 
     */
    average(select: (item: T) => number): number;

    /**
     * Check whether enumerable contains given item
     * @param item 
     * @param cmp 
     */
    contains(item: T, cmp?: (a: T, b: T) => boolean): boolean

    /**
     * Get number of elements
     */
    count(): number;

    /**
     * Get number of elements satisfying the function
     * @param func 
     */
    count(func: (item: T) => boolean): number;

    /**
     * Create enumerable from given data
     * @param data 
     */
    from<V>(data?: V[] | number | string): IEnumerable<V | number | string>;

    /**
     * Get elements thay satisfy given function
     * @param func 
     */
    where(func: (item: T, index?: number) => boolean): IEnumerable<T>;

    /**
     * Skip given number of elements
     * @param count 
     */
    skip(count: number): IEnumerable<T>; 

    /**
     * Get sum of items transformed by given function
     * @param func 
     */
    sum(func?: (item: T) => number): number;

    /**
     * Convert enumerable to array
     */
    toArray(): T[];
}