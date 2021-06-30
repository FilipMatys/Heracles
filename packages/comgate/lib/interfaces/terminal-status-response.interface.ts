// Interfaces
import { ITerminal } from "./terminal.interface";

/**
 * Terminal status response
 * @description Interface for terminal status response
 */
export interface ITerminalStatusResponse extends ITerminal {

    /**
     * Date time
     * @description Date and time on terminal
     * in TBD format
     */
    dateTime?: string;

    /**
     * Is online
     * @description Status of the connection
     */
    isOnline?: number;

    /**
     * Online status
     * @description Message of the connection
     * to the authorization server status
     */
    onlineStatus?: string;
} 