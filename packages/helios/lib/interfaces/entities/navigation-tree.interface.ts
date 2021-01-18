// Interfaces
import { IHeliosEntity } from "./entity.interface";

/**
 * Helios navigation tree item
 * @description Interface for navigation tree item
 */
export interface IHeliosNavigationTreeEntity extends IHeliosEntity {

    /**
     * Parent ID
     * @description ID of a parent entity
     */
    ParentID: string;

    /**
     * Text
     * @description Name of the item
     */
    Text: string;

    /**
     * Method
     * @description Method used to get the content
     * of the item
     */
    Method: string;

    /**
     * Parameters
     * @description Parameters for the Method
     */
    Parameters: string;
}