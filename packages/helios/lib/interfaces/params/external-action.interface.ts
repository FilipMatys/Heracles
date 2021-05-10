// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * External action params
 * @description Parameters for running external action
 */
export interface IHeliosExternalActionParams extends IHeliosParams {

    /**
     * ActionID
     * @description Identifier of the action
     */
    ActionID: string;

    /**
     * Selected rows
     * @description Array if indexes of selected rows
     */
    SelectedRows?: number[];

    /**
     * Parameters
     * @extends Parameters of external action
     */
    Parameters?: any[];
}