// External modules
import * as dotenv from "dotenv";

/**
 * Config
 * @description Load environment variables 
 */
export abstract class Config {

    /**
     * Initialize config
     */
    public static init(): void {
        // Call dotenv to load data
        dotenv.config();
    }

    /**
     * Get variable
     * @param name 
     */
    protected static get(name: string): string | number {
        // Try to get value
        let value: string | number = process.env[name];

        // Check value
        if (typeof value === "undefined") {
            throw new Error(`Undefined env. variable${name}`);
        }

        // Return value
        return value;
    }
}