// External modules
import "reflect-metadata";

// Symbols
import { ARRAY_METADATA_KEY } from "../symbols/array.symbol";

// Data
import { IArray } from "../interfaces/array.interface";

/**
 * Array decorator
 */
export function Array() {
    // Init required
    const required: IArray = { isArray: true };
    
    // Set metadata
    return Reflect.metadata(ARRAY_METADATA_KEY, required);
}