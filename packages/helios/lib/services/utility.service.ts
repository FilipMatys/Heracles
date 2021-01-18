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
    private parseValueFromHelios(value: string, type: string): any {
        // Check data type
        switch (type) {
            // Integer
            case HeliosDataType.INTEGER:
                // Parse integer
                return value ? parseInt(value) : undefined;

            // Float
            case HeliosDataType.FLOAT:
                // Parse float
                return value ? parseFloat(value) : undefined;

            // Boolean
            case HeliosDataType.BOOLEAN:
                return value === 'True';

            // Default 'parser'
            default:
                return value;
        }
    }
}