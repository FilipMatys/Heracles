// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios run params
 * @description Parameters for run request
 */
export interface IHeliosRunParams extends IHeliosParams {
    /**
     * Name
     * @description Name of procedure/view/function
     */
    Name?: string;

    /**
     * Parameters
     * @description SQL parameters
     */
    Parameters?: string;
}