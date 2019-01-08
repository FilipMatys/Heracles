// Index interface
export interface IIndex {
    fields?: any;
    options?: any;
}

// Indexes interface
export interface IIndexes extends Array<IIndex>  {}