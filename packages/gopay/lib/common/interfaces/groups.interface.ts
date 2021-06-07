// Interfaces
import { IGroup } from "./group.interface";

/**
 * Groups
 * @description Name of each group corresponds to group codes
 */
export interface IGroups {
    [code: string]: IGroup;
}