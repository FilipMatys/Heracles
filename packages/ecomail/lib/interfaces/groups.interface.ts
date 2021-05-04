// Interfaces
import { IGroup } from "./group.interface";

/**
 * Groups
 * @description Groups interface
 */
export interface IGroups {
    // Dictionary of groups
    [key: string]: IGroup;
}