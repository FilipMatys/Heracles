// Interfaces
import { IHeliosStringResult } from "../interfaces/results/string.interface";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

// Classes
import { HeliosRuntime } from "../classes/runtime.class";

// Services
import { RequestService } from "./request.service";

/**
 * EServer
 * @description Service for executing general 
 * eServer methods
 */
export class EServerService extends RequestService {

    // Runtime dependency flag
    protected readonly isRuntimeDependent: boolean = false;

    /**
     * Get version
     * @description Get current version 
     * of the eServer installation
     */
    public async getVersion(): Promise<IHeliosStringResult> {
        return this.request(HeliosRuntime.create(), "GetEServerVersion", undefined, undefined, { method: HeliosRequestMethod.Get });
    }
}