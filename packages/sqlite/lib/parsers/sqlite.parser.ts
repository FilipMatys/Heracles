// External modules
import { PropertyType, IPropertyDefinition, Serializable, ISchema } from "@calf/serializable";

/**
 * Sqlite parser
 */
export class SQLiteParser {

    /**
     * Safe date
     * @param value 
     */
    private safeDate(value: any): Date {
        return value ? new Date(value) : null;
    }

    /**
     * Safe double
     * @param value 
     */
    private safeDouble(value: any): number {
        return isNaN(value) || value === null ? 0 : parseFloat(value);
    }

    /**
     * Safe integer
     * @param value 
     */
    private safeInteger(value: any): number {
        return isNaN(value) || value === null ? 0 : parseInt(value);
    }

    /**
     * Safe object
     * @param value 
     */
    private safeObject(value: any): any {
        return value ? JSON.parse(value) : null;
    }

    /**
     * Safe reference
     * @param value 
     */
    private safeReference(value: any): Serializable {
        return value ? { _id: value } : null;
    }

    /**
     * Row from SQLite
     * @param row 
     */
    public rowFromSQLite<T>(schema: ISchema<IPropertyDefinition>, row: any): T {
        // Init result
        const result: T = {} as any;

        // Iterate row keys
        Object.keys(row).forEach((key) => {
            // Check if name is in schema
            if (!(key in schema.properties)) {
                return;
            }

            // Map value
            (result as any)[key] = this.fromSQLite(schema.properties[key], row[key]);
        });

        // Return result
        return result;
    } 

    /**
     * Type to sqlite
     * @param type 
     */
    public typeToSQLite(type: number): string {
        // Check type
        switch (type) {
            // Boolean, Date
            case PropertyType.BOOLEAN:
            case PropertyType.DATE:
                return "NUMERIC";
            // Double
            case PropertyType.DOUBLE:
                return "REAL";
            // Integer
            case PropertyType.INT:
                return "INTEGER";
            // All other
            default:
                return "TEXT";
        }
    }

    /**
     * From SQLite
     * @param definition 
     * @param value 
     */
    public fromSQLite(definition: IPropertyDefinition, value: any): any {
        // Check type
        switch (definition.type) {
            // Boolean
            case PropertyType.BOOLEAN:
                return !!value;
            // Date
            case PropertyType.DATE:
                return this.safeDate(value);
            // Double
            case PropertyType.DOUBLE:
                return this.safeDouble(value);
            // Integer
            case PropertyType.INT:
                return this.safeInteger(value);
            // Mixed and embeded
            case PropertyType.MIXED:
            case PropertyType.EMBEDED:
                return this.safeObject(value);
            case PropertyType.REFERENCE:
                return this.safeReference(value);
            // Buffer, text, oid and string
            case PropertyType.BUFFER:
            case PropertyType.TEXT:
            case PropertyType.OID:
            case PropertyType.STRING:
            default:
                return value;
                
        }
    }

    /**
     * To SQLite
     * @param definition 
     * @param value 
     */
    public toSQLite(definition: IPropertyDefinition, value: any): any {
        // Check type
        switch (definition.type) {
            // Boolean
            case PropertyType.BOOLEAN:
                return value ? 1 : 0;
            // Date
            case PropertyType.DATE:
                // Check if value is set
                if (!value) {
                    return 'null';
                }

                // Check instance
                if (value instanceof Date) {
                    return value.getTime();
                }
                else {
                    return new Date(value).getTime();
                }

            // Double
            case PropertyType.DOUBLE:
                return this.safeDouble(value);
            // Integer
            case PropertyType.INT:
                return this.safeInteger(value);
            // Mixed and embedded
            case PropertyType.MIXED:
            case PropertyType.EMBEDED:
                // Check if value is set
                if (!value) {
                    return 'null';
                }

                // Stringify
                return `'${JSON.stringify(value)}'`;
            // Reference
            case PropertyType.REFERENCE:
                // Check if value is set
                if (!value) {
                    return 'null';
                }

                // Check for string
                if (value instanceof String) {
                    return `'${value}'`;
                }
                else {
                    // Check for _id
                    if (value._id) {
                        return `'${value._id}'`;
                    }
                    else {
                        return 'null';
                    }
                }

            // Buffer, text, oid and string
            case PropertyType.BUFFER:
            case PropertyType.TEXT:
            case PropertyType.OID:
            case PropertyType.STRING:
            default:
                return value ? `'${value}'` : 'null';
        }
    }
}