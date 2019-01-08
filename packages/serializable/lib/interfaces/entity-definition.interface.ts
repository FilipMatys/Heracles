// Data
import { IEntity } from "./entity.interface";
import { ITimestamp } from "./timestamp.interface";
import { IIndexes } from "./indexes.interface";

// Entity definition interface
export interface IEntityDefinition extends IEntity, ITimestamp {
    indexes?: IIndexes;
}