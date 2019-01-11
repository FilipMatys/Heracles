// Interfaces
import { IEnumerable } from "./enumerable.interface";

/**
 * Collection interface
 */
export interface ICollection<T> extends IEnumerable<T> {

    /**
     * Collection length
     * @description This should be named count, but count is already a function
     */
    readonly length: number;

    /**
     * Add item to collection
     * @param item 
     */
    add(item: T): void;

    /**
     * Removes from items from collection
     */
    clear(): void;

    /**
     * Copy items from collection into given array
     * @param array 
     * @param index 
     */
    copyTo(array: T[], index: number): void;

    /**
     * Remove item from collection
     * @param item 
     */
    remove(item: T): void;
}