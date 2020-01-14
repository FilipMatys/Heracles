/**
 * Value
 * @description Simple value operations and queries
 */
export class Value {

    /**
     * Toggle values
     */
    public static toggle<TValue>(current: TValue, values: TValue[]): TValue {
        // Get index of current value
        const index = values.indexOf(current) + 1;

        // Return value
        return values[index % values.length];
    }

    /**
     * Get value or default if not defined
     * @param object 
     * @param selector 
     */
    public static default<TObject, TValue>(object: TObject, selector: (object: TObject) => TValue, defaultValue: TValue): TValue {
        try {
            // Get value 
            const value = selector(object);

            // Check if value is defined and return default if not
            return (value !== undefined && value !== null) ? value : defaultValue; 
        }
        catch (_) {
            // Ignore exception and return default value
            return defaultValue;
        }
    }

    /**
     * Check if value is in given array 
     * @param value 
     * @param values 
     */
    public static isIn<TValue>(value: TValue, values: TValue[]): boolean {
        return values.indexOf(value) !== -1;
    }

    /**
     * Check value is defined
     * @param value 
     */
    public static isDefined<TValue>(value: TValue): boolean {
        return value !== undefined && value !== null;
    }

    /**
     * Check if value is empty
     * @param value 
     */
    public static isEmpty(value: string | Array<any>): boolean {
        return !Value.isDefined(value) || value.length === 0;
    }
} 