// Interfaces
import { IHeliosConfig } from "../interfaces/configs/config.interface";

// Services
import { ExecuteService } from "../services/execute.service";
import { EServerService } from "../services/server.service";
import { UtilityService } from "../services/utility.service";

// Classes
import { HeliosConfig } from "./config.class";

/**
 * Helios client
 */
export class HeliosClient {

    /**
     * eServer
     * @description eServer service
     */
    private static _eServer: EServerService = new EServerService();

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
     * eServer
     * @description eServer service
     */
    public static get EServer(): EServerService {
        // Get service instance
        return this._eServer;
    }

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