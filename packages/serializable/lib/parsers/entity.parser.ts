// External modules
import "reflect-metadata";

// Symbols
import { ENTITY_METADATA_KEY } from "../symbols/entity.symbol";
import { TIMESTAMP_METADATA_KEY } from "../symbols/timestamp.symbol";
import { INDEXES_METADATA_KEY } from "../symbols/indexes.symbol";

// Data
import { IEntityDefinition } from "../interfaces/entity-definition.interface";
import { IEntity } from "../interfaces/entity.interface";
import { ITimestamp } from "../interfaces/timestamp.interface";
import { IIndexes } from "../interfaces/indexes.interface";

// Parsers
import { BaseParser } from "./base.parser";

/**
 * Entity parser
 */
export class EntityParser extends BaseParser<IEntityDefinition> {

    /**
     * Parse entity
     * @param target 
     */
    public parse(target: Object): IEntityDefinition | undefined {
        // First get sub definitions
        // Entity
        const entity = this.getEntity(target);

        // Check entity
        if (!entity) {
            return undefined;
        }

        // Timestamp
        const timestamp = this.getTimestamp(target);

        // Get indexes
        const indexes = this.getIndexes(target);

        // Merge definitions
        return Object.assign<IEntityDefinition, IEntity, ITimestamp>({ indexes: indexes }, entity, timestamp);
    }

    /**
     * Get entity
     * @param target 
     */
    private getEntity(target: Object): IEntity {
        return Reflect.getMetadata(ENTITY_METADATA_KEY, target);
    }

    /**
     * Get timestamp
     * @param target 
     */
    private getTimestamp(target: Object): ITimestamp {
        // Init default timestamp definition
        const timestamp: ITimestamp = { isTimeStamped: false };

        // Assign data from metadata
        return Object.assign(timestamp, Reflect.getMetadata(TIMESTAMP_METADATA_KEY, target) || {});
    } 

    /**
     * Get indexes
     * @param target 
     */
    private getIndexes(target: Object): IIndexes {
        // Get metadata
        return Reflect.getMetadata(INDEXES_METADATA_KEY, target) || [];
    }
}