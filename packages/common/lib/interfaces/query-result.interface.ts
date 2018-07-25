// Query result interface
export interface IQueryResult<T> {
    items?: T[];
    page?: number;
    pageSize?: number;
    total?: number;
}