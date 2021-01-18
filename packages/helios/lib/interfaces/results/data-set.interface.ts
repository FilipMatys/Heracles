// Interfaces
import { IHeliosDataSet } from "../types/data-set.interface";
import { IHeliosResultFields } from "../fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios data set result
 * @description Result bearing data set result
 */
export interface IHeliosDataSetResult extends IHeliosResult<IHeliosResultFields<IHeliosDataSet>> { }