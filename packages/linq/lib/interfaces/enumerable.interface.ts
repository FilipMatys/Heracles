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
     * Aggregate items by given function
     * @param func 
     * @param seed 
     */
    aggregate<V>(func: (result: V, next: T) => V, seed: V): V;

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
     * Concatenate enumerables
     * @param source 
     */
    concat(source: IEnumerable<T>): IEnumerable<T>;

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
     * Get first element
     */
    first(): T;

    /**
     * Get first element that satifies the confidion
     * @param func 
     */
    first(func?: (item: T) => boolean): T;

    /**
     * Get first element or default
     * @param def 
     */
    firstOrDefault(def: T): T;

    /**
     * Get first element that satisfies the condition 
     * or default
     * @param def 
     * @param func 
     */
    firstOrDefault(def: T, func: (item: T) => boolean): T;

    /**
     * Create enumerable from given data
     * @param data 
     */
    from<V>(data?: V[] | V): IEnumerable<V>;

    /**
     * Get last element
     */
    last(): T;

    /**
     * Get last element that satisfies the confidion
     * @param func 
     */
    last(func?: (item: T) => boolean): T;

    /**
     * Get last element or default
     * @param def 
     */
    lastOrDefault(def: T): T;

    /**
     * Get last element that satisfies the condition 
     * or default
     * @param def 
     * @param func 
     */
    lastOrDefault(def: T, func: (item: T) => boolean): T;

    /**
     * Get maximum value from enumerable
     * @param cmp 
     */
    max(cmp?: (a: T, b: T) => T): T;

    /**
     * Get minimum from enumerable
     * @param cmp 
     */
    min(cmp?: (a: T, b: T) => T): T

    /**
     * Get reversed enumerable
     */
    reverse(): IEnumerable<T>;

    /**
     * Project enumerable items  
     * @param func 
     */
    select<V>(func: (item: T, index?: number) => V): IEnumerable<V>;

    /**
     * Select nested items with projection
     * @param select 
     * @param func 
     */
    selectMany<U, V>(select: (item: T) => U[], func?: (item: T, selected: U) => V): IEnumerable<V>;

    /**
     * Returns single element
     * @param func 
     */
    single(func?: (item: T) => boolean): T;

    /**
     * Returns single or default element
     * @param def 
     * @param func 
     */
    singleOrDefault(def: T, func?: (item: T) => boolean): T;

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
     * Take first {count} elements
     * @param count 
     */
    take(count: number): IEnumerable<T>;

    /**
     * Convert enumerable to array
     */
    toArray(): T[];

    /**
     * Get elements thay satisfy given function
     * @param func 
     */
    where(func: (item: T, index?: number) => boolean): IEnumerable<T>;
}