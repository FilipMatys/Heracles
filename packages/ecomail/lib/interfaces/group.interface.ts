// Interfaces
import { ICategory } from "./category.interface";

/**
 * Group
 * @description Group interface
 */
export interface IGroup {
    name?: string;
    category?: ICategory[];
}