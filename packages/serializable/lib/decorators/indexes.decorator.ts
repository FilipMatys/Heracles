// External modules
import "reflect-metadata";

// Symbols
import { INDEXES_METADATA_KEY } from "../symbols/indexes.symbol";

// Data
import { IIndexes } from "../interfaces/indexes.interface";

/**
 * Indexes decorator
 * @param indexes 
 */
export function Indexes(indexes: IIndexes) {
    // Set metadata
    return Reflect.metadata(INDEXES_METADATA_KEY, indexes || []);
}