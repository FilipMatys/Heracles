// Query result interface
export interface IQueryResult<TEntity> {
    items?: TEntity[];
    page?: number;
    pageSize?: number;
    total?: number;
}