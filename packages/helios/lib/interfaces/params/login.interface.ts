// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios login params
 * @description Parameters for login request
 */
export interface IHeliosLoginParams extends IHeliosParams {
    Domain?: string;
    Username?: string;
    Password?: string;
    PluginSysName?: string;
}