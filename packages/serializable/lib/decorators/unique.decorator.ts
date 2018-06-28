// External modules
import "reflect-metadata";

// Symbols
import { UNIQUE_METADATA_KEY } from "../symbols/unique.symbol";

// Data
import { IUnique } from "../interfaces/unique.interface";

/**
 * Unique decorator
 */
export function Unique() {
    // Init unique
    const unique: IUnique = { isUnique: true };

    // Set metadata
    return Reflect.metadata(UNIQUE_METADATA_KEY, unique);
}