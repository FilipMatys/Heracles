// Interfaces
import { IEnumerable } from "./enumerable.interface";

/**
 * Grouping interface 
 */
export interface IGrouping<K, T> extends IEnumerable<T> {

    /**
     * Key that groups elements
     */
    readonly key: K;
}