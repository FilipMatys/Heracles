// Interfaces
import { IGrouping } from "../interfaces";

// Classes
import { Enumerable } from "./enumerable.class";

/**
 * Grouping enumerable
 */
export class Grouping<K, T> extends Enumerable<T> implements IGrouping<K, T> {

    /**
     * Key after which items were grouped
     */
    public key: K;

    /**
     * Constructor
     * @param key 
     * @param data 
     */
    constructor(key: K, data?: T[]) {
        // Call super
        super(data);

        // Assign key
        this.key = key;
    }
}