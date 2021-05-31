// Classes
import { HeliosClient } from "../classes/client.class";
import { HeliosConfig } from "../classes/config.class";

/**
 * Debug
 * @description Debug utility
 */
export class Debug {

    /**
     * Log
     * @param date 
     * @param method 
     * @param text 
     */
    public static log(date: Date, method: string, text: string) {
        // Only log when debug is set
        HeliosConfig.debug && console.log(`${HeliosClient.Utility.parseDateToHelios(date)} [${method}]: ${text}`);
    }
}