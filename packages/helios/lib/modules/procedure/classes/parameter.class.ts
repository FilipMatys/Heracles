// Classes
import { HeliosClient } from "../../../classes/client.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/paremeter-type.enum";

/**
 * Helios procedure param
 * @description Param of helios procedure
 */
export class HeliosProcedureParameter<TValue> {

    /**
     * Value
     * @description Value getter
     */
    public get Value(): TValue | undefined | null {
        return this.value;
    }

    /**
     * Value
     * @description Value setter
     */
    public set Value(value: TValue | undefined | null) {
        this.value = value;
    }

    /**
     * Name
     * @description Name getter
     */
    public get Name(): string {
        return this.name;
    }

    /**
     * Name
     * @description Parameter name
     */
    private name: string;

    /**
     * Type
     * @description Value type
     */
    private type: number;

    /**
     * Value
     * @description Param value
     */
    private value?: TValue | null;

    /**
     * Constructor
     * @param name
     * @param type 
     * @param value 
     */
    constructor(name: string, type: number, value?: TValue | null) {
        // Assign values
        this.name = name;
        this.type = type;
        this.value = value;
    }

    /**
     * To string
     * @description Convert param to string
     * @returns 
     */
    public toString(): string {
        // Convert value to string
        const valueToString = () => {
            // First check if value is null
            if (this.value === null) {
                // Return null
                return `NULL`;
            }

            // Check type
            switch (this.type) {
                // Date
                case HeliosProcedureParameterType.DATETIME:
                    // Parse date
                    return `'${HeliosClient.Utility.parseDateToHelios(this.value as any)}'`

                // String types
                case HeliosProcedureParameterType.NVARCHAR:
                case HeliosProcedureParameterType.NCHAR:
                    return `'${this.value}'`;

                // Default
                default:
                    return `${this.value}`;
            }
        }

        // Return param to string
        return `@${this.name} = ${valueToString()}`;
    }

    /**
     * From string
     * @description Assign value from string
     * @param value 
     */
    public fromString(value: string): void {
        // Check if value is set
        if (!value) {
            // Set null
            this.value = null;

            // Do nothing else
            return;
        }

        // Check type
        switch (this.type) {
            // Number types
            case HeliosProcedureParameterType.BIT:
            case HeliosProcedureParameterType.FLOAT:
            case HeliosProcedureParameterType.INT:
            case HeliosProcedureParameterType.NUMERIC:
            case HeliosProcedureParameterType.SMALLINT:
            case HeliosProcedureParameterType.TINYINT:
                // Set number value
                this.value = Number(value) as any;
                break;

            // Date time
            case HeliosProcedureParameterType.DATETIME:
                // Parse date
                this.value = HeliosClient.Utility.parseDateTimeFromHelios(value) as any;
                break;

            // Default
            default:
                // Assign value
                this.value = value as any;
        }
    }
}