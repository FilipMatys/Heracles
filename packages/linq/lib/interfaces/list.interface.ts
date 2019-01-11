// Interfaces
import { ICollection } from "./collection.interface";
import { IEnumerable } from "./enumerable.interface";

/**
 * List interface
 */
export interface IList<T> extends ICollection<T> {

    /**
     * Add items from enumerable
     * @param enumerable 
     */
    addRange(enumerable: IEnumerable<T>): void;

    /**
     * Create list from items between given indexes
     * @param from 
     * @param to 
     */
    getRange(from: number, to: number): IList<T>;

    /**
     * Get index of given item
     * @param item 
     */
    indexOf(item: T): number;

    /**
     * Get element from given index
     * @param index 
     */
    item(index: number): T;

    /**
     * Insert item at given index
     * @param index 
     * @param item 
     */
    insert(index: number, item: T): void;

    /**
     * Insert items starting at given index
     * @param enumerable 
     * @param index
     */
    insertRange(enumerable: IEnumerable<T>, index: number): void;

    /**
     * Remove all items that satisfy the function
     * @param func 
     */
    removeAll(func: (item: T) => boolean): void;

    /**
     * Remove item at given index
     * @param index 
     */
    removeAt(index: number): void;

    /**
     * Remove items within given indexes
     * @param from 
     * @param to 
     */
    removeRange(from: number, to: number): void;
}