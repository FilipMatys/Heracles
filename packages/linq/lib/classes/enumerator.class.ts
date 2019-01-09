// Interfaces
import { IEnumerator } from "../interfaces/enumerator.interface";

/**
 * Enumerator
 */
export class Enumerator<T> implements IEnumerator<T> {

    /**
     * Current index
     */
    private _index: number;

    /**
     * Current item
     */
    private _current: T;

    /**
     * Data
     */
    private _data: T[];

    /**
     * Get current item
     */
    public get current(): T {
        return this._current;
    }

    /**
     * Constructor
     * @param data 
     */
    constructor(data: T[]) {
        // Init index and current
        this._index = -1;
        this._current = null;

        // Assign data
        this._data = data || [];
    }

    /**
     * Reset enumerator
     */
    public reset(): void {
        // Reset index
        this._index = -1;

        // Reset current
        this._current = null;
    }

    /**
     * Dispose enumerator
     */
    public dispose(): void {}

    /**
     * Move to next item
     */
    public moveNext(): boolean {
        // Increase index
        if (++this._index >= this._data.length) {
            return false;
        }

        // Assign current
        this._current = this._data[this._index];

        // Move to next was successfull
        return true;
    }
}