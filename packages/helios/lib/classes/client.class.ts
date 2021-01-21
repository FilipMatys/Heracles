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
    private static _execute: ExecuteService = new ExecuteService();

    /**
     * Utility
     * @description Utility service
     */
    private static _utility: UtilityService = new UtilityService();

    /**
     * Execute
     * @description Execute service
     */
    public static get Execute(): ExecuteService {
        // Get service instance
        return this._execute;
    }

    /**
     * Utility
     * @description Utility service
     */
    public static get Utility(): UtilityService {
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
    }
}