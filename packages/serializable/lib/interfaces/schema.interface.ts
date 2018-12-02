// Data
import { IEntityDefinition } from "./entity-definition.interface";
import { IPropertyDefinition } from "./property-definition.interface";

// Schema interface
export interface ISchema<T> {
    entity?: IEntityDefinition;
    properties?: { [name: string]: T };
}