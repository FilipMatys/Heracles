// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios change database params
 * @description Parameters for change database request
 */
export interface IHeliosChangeDatabaseParams extends IHeliosParams {

    /**
     * Database name
     * @description Name of the database
     * to change to (SysName)
     */
    DatabaseName: string;
}