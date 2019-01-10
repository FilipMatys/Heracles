/**
 * Invalid operation error
 */
export class InvalidOperationError extends Error {

    /**
     * Constructor
     * @param args 
     */
    constructor(...args) {
        // Call super constructor
        super(...args);
        
        // Assign proper stack
        this.stack = new Error().stack;
    }
}