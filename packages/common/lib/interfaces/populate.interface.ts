// Populate interface
export interface IPopulate {
    path: string;
    select?: string[];
    populate?: IPopulate[];
}