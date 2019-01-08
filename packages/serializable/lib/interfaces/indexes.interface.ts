// Indexes interface
export interface IIndexes extends Array<IIndex>  {}

// Index interface
interface IIndex {
    fields?: any;
    options?: any;
}