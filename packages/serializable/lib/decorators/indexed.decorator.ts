// External modules
import "reflect-metadata";

// Symbols
import { INDEXED_METADATA_KEY } from "../symbols/indexed.symbol";

// Data
import { IIndexed } from "../interfaces/indexed.interface";

/**
 * Indexed decorartor
 */
export function Indexed() {
    // Init indexed
    const indexed: IIndexed = { isIndexed: true };

    // Set metadata
    return Reflect.metadata(INDEXED_METADATA_KEY, indexed);
}