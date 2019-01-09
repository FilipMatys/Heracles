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
     * Calculate average
     */
    average(): number;

    /**
     * Calculate average of given property
     * @param select 
     */
    average(select: (item: T) => number): number;

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
     * Get elements thay satisfy given function
     * @param func 
     */
    where(func: (item: T, index: number) => boolean): IEnumerable<T>;
}