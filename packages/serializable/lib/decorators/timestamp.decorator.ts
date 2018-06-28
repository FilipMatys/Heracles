// External modules
import "reflect-metadata";

// Symbols
import { TIMESTAMP_METADATA_KEY } from "../symbols/timestamp.symbol";

// Data
import { ITimestamp } from "../interfaces/timestamp.interface";

/**
 * Timestamp decorator
 */
export function Timestamp() {
    // Init timestamp
    const timestamp: ITimestamp = { isTimeStamped: true };
    
    // Set metadata
    return Reflect.metadata(TIMESTAMP_METADATA_KEY, timestamp);
}