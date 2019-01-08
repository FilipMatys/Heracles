// External modules
import "reflect-metadata";

// Symbols
import { ENTITY_METADATA_KEY } from "../symbols/entity.symbol";

// Data
import { IEntity } from "../interfaces/entity.interface";
import { IEntityConfig } from "../interfaces/entity-config.interface";

/**
 * Entity decorator
 * @param name 
 * @param config
 */
export function Entity(name: string, config?: IEntityConfig)  {
    // Init entity
    let entity: IEntity = { 
        name: name,
        config: Object.assign<IEntityConfig, IEntityConfig>({ autoIndexId: true, _id: true }, config || {}) 
    };

    // Set metadata
    return Reflect.metadata(ENTITY_METADATA_KEY, entity);
}