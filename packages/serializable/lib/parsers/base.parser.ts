/**
 * Base parser
 */
export abstract class BaseParser<T> {

    /**
     * Parse
     * @param args 
     */
    public abstract parse(...args: any[]): T | undefined;
}