// External modules
import "reflect-metadata";

// Symbols
import { DEFAULT_METADATA_KEY } from "../symbols/default.symbol";

// Data
import { IDefault } from "../interfaces/default.interface";

/**
 * Default decorator
 * @param value 
 */
export function Default<T>(value: T) {
    // Init default
    const lDefault: IDefault<T> = { default: value };

    // Set metadata
    return Reflect.metadata(DEFAULT_METADATA_KEY, lDefault);
}