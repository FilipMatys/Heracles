// Interfaces
import { IHeliosConfig } from "../interfaces/configs/config.interface";

// Services
import { ExecuteService } from "../services/execute.service";
import { UtilityService } from "../services/utility.service";

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
     * Utility
     * @description Utility service
     */
    private static _utility: UtilityService;

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
     * Utility
     * @description Utility service
     */
    public static get Utility(): UtilityService {
        // Make sure service is initialized
        if (!this._utility) {
            // Throw error
            throw new Error("[@calf/helios@HeliosClient]: Utility not initialized, did you forget to initialize HeliosClient?");
        }

        // Get service instance
        return this._utility;
    }

    /**
     * Initialize 
     * @param config 
     */
    public static initialize(config: IHeliosConfig): void {
        // Initialize config
        HeliosConfig.initialize(config);

        // Init services
        this._execute = new ExecuteService();
        this._utility = new UtilityService();
    }
}