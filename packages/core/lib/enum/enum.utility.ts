/**
 * Enum utility
 */
export class Enum {

    /**
     * Get enum values
     * @param payload 
     */
    public static getValues(payload: Object): number[] {
        // Init result
        let result: number[] = [];

        // Iterate keys
        for (let item in payload) {
            // Try to convert item to number
            let number = Number(item);

            // Now check if isNaN
            if (!isNaN) {
                result.push(number);
            }
        }

        // Return result
        return result;
    }

    /**
     * Get enum names
     */
    public static getNames(payload: Object): string[] {
        // Init result
        let result: string[] = [];

        // Iterate keys
        for (let item in payload) {
            // Try to convert item to number
            let number = Number(item);

            // Now check if isNaN
            if (isNaN) {
                result.push(item);
            }
        }

        // Return result
        return result;
    }

    /**
     * Get name of given value
     * @param payload 
     * @param value 
     */
    public static getName(payload: Object, value: number): string {
        return (payload as any)[value];
    }

    /**
     * Get value of given name
     * @param payload 
     * @param name 
     */
    public static getValue(payload: Object, name: string): number {
        return (payload as any)[name];
    }
}