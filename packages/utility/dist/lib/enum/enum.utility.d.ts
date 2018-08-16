/**
 * Enum utility
 */
export declare class Enum {
    /**
     * Get enum values
     * @param payload
     */
    static getValues(payload: Object): number[];
    /**
     * Get enum names
     */
    static getNames(payload: Object): string[];
    /**
     * Get name of given value
     * @param payload
     * @param value
     */
    static getName(payload: Object, value: number): string;
    /**
     * Get value of given name
     * @param payload
     * @param name
     */
    static getValue(payload: Object, name: string): number;
}
