// Interfaces
import { IHeliosConfig } from "../interfaces/config.interface";

// Services
import { ExecuteService } from "../services/execute.service";

// Classes
import { HeliosConfig } from "./config.class";

/**
 * Helios client
 */
export class HeliosClient {

    /**
     * Execute
     * @description Execute service
     */
    private static _execute: ExecuteService;

    /**
     * Execute
     * @description Execute service
     */
    public static get Execute(): ExecuteService {
        // Make sure service is initialized
        if (!this._execute) {
            // Throw error
            throw new Error("[@calf/helios@HeliosClient]: Execute not initialized, did you forget to initialize HeliosClient?");
        }

        // Get service instance
        return this._execute;
    }

    /**
     * Initialize 
     * @param config 
     */
    public static initialize(config: IHeliosConfig): void {
        // Initialize config
        HeliosConfig.initialize(config);

        // Init execute service
        this._execute = new ExecuteService();
    }
}