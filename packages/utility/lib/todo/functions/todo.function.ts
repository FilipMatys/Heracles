/**
 * TODO
 * @description Throws exception when is set as critical
 * @param message 
 * @param critical 
 */
export function TODO(message: string = "Not implemented", critical: boolean = true): void {
    // Create message
    const tMessage = `TODO: ${message}`;

    // Check for critical flag
    if (critical) {
        // Throw exception
        throw Error(tMessage);
    }
    else {
        // Log message
        console.log(tMessage);
    }
}