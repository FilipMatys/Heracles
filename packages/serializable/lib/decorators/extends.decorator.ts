// External modules
import "reflect-metadata";

// Symbols
import { EXTENDS_METADATA_KEY } from "../symbols/extends.symbol";

/**
 * Extends decorator
 * @param name 
 * @param config
 */
export function Extends(...objects: (new () => any)[]) {
    // Set metadata
    return Reflect.metadata(EXTENDS_METADATA_KEY, objects);
}