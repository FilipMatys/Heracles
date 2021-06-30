// Interfaces
import { ISecurePayload } from "./secure-payload.interface";

/**
 * Terminal status payload
 * @description Interface for terminal status payload
 */
export interface ITerminalStatusPayload extends ISecurePayload {

    /**
     * Check online
     * @description Information whether the test of connection
     * to the authorization server is required
     */
    checkOnline?: boolean;
}