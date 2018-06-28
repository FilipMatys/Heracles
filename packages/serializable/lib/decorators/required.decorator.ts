// External modules
import "reflect-metadata";

// Symbols
import { REQUIRED_METADATA_KEY } from "../symbols/required.symbol";

// Data
import { IRequired } from "../interfaces/required.interface";

/**
 * Required decorator
 */
export function Required() {
    // Init required
    const required: IRequired = { isRequired: true };
    
    // Set metadata
    return Reflect.metadata(REQUIRED_METADATA_KEY, required);
}