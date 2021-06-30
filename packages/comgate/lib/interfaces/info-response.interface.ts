// Interfaces
import { ITerminal } from "./terminal.interface";

/**
 * Info response
 * @description Interface for Info request response
 */
export interface IInfoResponse extends ITerminal {

    /**
     * Protocol
     * @description Name of the used protocol
     */
    protocol?: string;

    /**
     * Version
     * @description Version of the protocol
     */
    version?: number;
}