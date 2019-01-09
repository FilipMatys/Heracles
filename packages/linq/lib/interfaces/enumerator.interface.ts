// Interfaces
import { IDisposable } from "./disposable.interface";

/**
 * Enumerator interface
 */
export interface IEnumerator<T> extends IDisposable {

    /**
     * Get current item
     */
    readonly current: T;

    /**
     * Move to next item
     */
    moveNext(): boolean;

    /**
     * Reset enumerator
     */
    reset(): void;
}