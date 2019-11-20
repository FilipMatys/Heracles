// Data
import { IPopulate } from "./populate.interface";

// Query interface
export interface IQuery {
    term?: string;
    filter?: any;
    limit?: number;
    skip?: number;
    select?: string[];
    sort?: string[];
    populate?: IPopulate[];
}