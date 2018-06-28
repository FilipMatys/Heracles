// External modules
import "reflect-metadata";

// Symbols
import { ENTITY_METADATA_KEY } from "../symbols/entity.symbol";

// Data
import { IEntity } from "../interfaces/entity.interface";

/**
 * Entity decorator
 * @param name 
 */
export function Entity(name: string)  {
    // Init entity
    let entity: IEntity = { name: name };

    // Set metadata
    return Reflect.metadata(ENTITY_METADATA_KEY, entity);
}