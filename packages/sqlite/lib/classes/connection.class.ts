/**
 * SQLite Connection
 */
export abstract class SQLiteConnection {

    /**
     * Connect to SQLite database
     */
    public abstract connect(): Promise<void>;

    /**
     * Execute query
     * @param query 
     * @param params 
     */
    public abstract execute<T>(query: string, params?: any): Promise<T>;

    /**
     * Check if is connected
     */
    public abstract isConnected(): boolean;
}