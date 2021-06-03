// Interfaces
import { IHeliosDataSet } from "../interfaces/types/data-set.interface";

// Enums
import { HeliosDataType } from "../enums/data-type.enum";

/**
 * Utility service
 * @description Utility methods
 */
export class UtilityService {

    /**
     * Map data set to entities
     * @param dataSet 
     */
    public mapDataSetToEntities<TEntity>(dataSet: IHeliosDataSet): TEntity[] {
        // Init list of entities
        const entities: TEntity[] = [];

        // Make sure data set is set and has table defined
        if (!dataSet || !dataSet.table) {
            // Return empty list of entities
            return entities;
        }

        // Process data set rows
        for (let index = 0; index < (dataSet.table.rows || []).length; index++) {
            // Get row
            const row = dataSet.table.rows[index];

            // Init entity
            const entity: any = {};

            // Map fields
            row.forEach((field, index) => {
                // Get field definition
                const fieldDefinition = dataSet.table.fields[index];

                // Assign parsed value
                entity[field.FieldName] = this.parseValueFromHelios(field.Value, fieldDefinition.DataType);
            });

            // Add entity to list
            entities.push(entity);
        }

        // Return entities
        return entities;
    }

    /**
     * Parse value from helios
     * @param value 
     * @param type Helios field type
     */
    public parseValueFromHelios(value: string, type: string): any {
        // Check data type
        switch (type) {
            // Integer and byte
            case HeliosDataType.BYTE:
            case HeliosDataType.SMALL_INTEGER:
            case HeliosDataType.INTEGER:
                // Parse integer
                return value ? parseInt(value) : undefined;

            // Float
            case HeliosDataType.FLOAT:
                // Parse float
                return value ? parseFloat(value) : undefined;

            // DateTime
            case HeliosDataType.DATE_TIME:
                return value ? this.parseDateTimeFromHelios(value) : undefined;

            // Boolean
            case HeliosDataType.BOOLEAN:
                return value === 'True';

            // Default 'parser'
            default:
                return value;
        }
    }

    /**
     * Parse date time from Helios
     * @param value 
     */
    public parseDateTimeFromHelios(value: string): Date {
        // Split value into date and time
        const [date, time] = value.split(" ");

        // Now split date
        const [day, month, year] = date.split(".");

        // Check if time is set
        if (!time) {
            // Return date without time
            return new Date(Number(year), Number(month) - 1, Number(day));
        }

        // Now split time
        const [hours, minutes, seconds] = time.split(":");

        // Return date
        return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds));
    }

    /**
     * Parse date to helios
     * @param value
     */
    public parseDateToHelios(value: Date): string {
        // Create date part
        const date = [
            `${value.getDate()}`.padStart(2, "0"),
            `${value.getMonth() + 1}`.padStart(2, "0"),
            `${value.getFullYear()}`
        ].join(".");

        // Create time part
        const time = [
            `${value.getHours()}`.padStart(2, "0"),
            `${value.getMinutes()}`.padStart(2, "0"),
            `${value.getSeconds()}`.padStart(2, "0")
        ].join(":");

        // Return date and time
        return [date, time].join(" ");
    }
}