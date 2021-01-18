// Interfaces
import { IHeliosDataSet } from "../interfaces/types/data-set.interface";

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
            row.forEach((field) => entity[field.FieldName] = field.Value);

            // Add entity to list
            entities.push(entity);
        }

        // Return entities
        return entities;
    }
}