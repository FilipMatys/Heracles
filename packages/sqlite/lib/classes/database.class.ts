// Classes
import { SQLiteConnection } from "./connection.class";
import { SQLiteDao } from "./dao.class";

/**
 * SQLite database
 */
export class SQLiteDatabase {

    // Connection
    protected static connection: SQLiteConnection;

    // Dictionary of daos
    protected static daos: { [name: string]: SQLiteDao<any> } = {};

    // Is ready flag for database
    protected static isReady: boolean = false;

    // Make constructor private
    private constructor() { };

    /**
     * Wait for database to be ready
     */
    public static async ready(): Promise<void> {
        // Check flag
        if (this.isReady) {
            // Resolve
            return Promise.resolve();
        }

        // Create new promise
        return new Promise<void>((resolve) => {
            // Create interval to check 
            let interval = setInterval(() => {
                // Check for is ready
                if (!this.isReady) {
                    return;
                }

                // Clear interval
                clearInterval(interval);

                // Resolve
                return resolve();
            }, 50);
        });
    }

    /**
     * Initialize
     * @param connection 
     */
    public static async init(connection: SQLiteConnection): Promise<void> {
        // Assign connection
        this.connection = connection;

        // Connect
        await this.connection.connect();

        // Initialize daos
        await this.initDaos();

        // Set database as ready
        this.isReady = true;

        // Resolve
        return Promise.resolve();
    }

    /**
     * Execute query
     * @param query 
     * @param params 
     */
    public static async execute<T>(query: string, params?: any): Promise<T> {
        // Try to execute query
        try {
            // Execute query
            let result = await this.connection.execute<T>(query, params);

            // Resolve
            return Promise.resolve(result);
        }
        catch (e) {
            // Reject
            return Promise.reject(e);
        }
    }

    /**
     * Check if DAO is registered
     * @param name 
     */
    public static isRegistered(name: string): boolean {
        return name in this.daos;
    }

    /**
     * Register dao
     * @param name 
     * @param dao 
     */
    public static async register<T>(name: string, dao: SQLiteDao<T>): Promise<void> {
        // First check if is already registerd
        if (this.isRegistered(name)) {
            return Promise.resolve();
        }

        // Assign dao
        this.daos[name] = dao;

        // Check for connection
        if (!this.connection || !this.connection.isConnected()) {
            return Promise.resolve();
        }

        // Initialize dao
        await dao.init();

        // Resolve
        return Promise.resolve();
    }

    /**
     * Get dao
     * @param name 
     */
    public static dao<T>(name: string): SQLiteDao<T> {
        return this.daos[name];
    }

    /**
     * Init daos
     */
    private static async initDaos(): Promise<void> {
        // Get keys
        let keys: string[] = Object.keys(this.daos);

        // Iterate keys to initialize or daos
        for (let index = 0; index < keys.length; index++) {
            // Initialize dao
            await this.daos[keys[index]].init();
        }

        // Return
        return Promise.resolve();
    }
}