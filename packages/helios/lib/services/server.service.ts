// External modules
import fetch, { Response } from "node-fetch";
import { Observable, Subject } from "rxjs";

// Interfaces
import { IHeliosRequestConfig } from "../interfaces/configs/request.interface";
import { IHeliosStringResult } from "../interfaces/results/string.interface";
import { IHeliosParams } from "../interfaces/params/params.interface";
import { IHeliosResult } from "../interfaces/results/result.interface";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

// Classes
import { HeliosConfig } from "../classes/config.class";

/**
 * EServer
 * @description Service for executing general 
 * eServer methods
 */
export class EServerService {

    // Result observable
    private readonly resultSource: Subject<IHeliosResult> = new Subject<IHeliosResult>();
    public readonly result$: Observable<IHeliosResult> = this.resultSource.asObservable();

    /**
     * Observe communication
     * @param method 
     */
    public observe(): Observable<IHeliosResult> {
        // Return result source as observable
        return this.result$;
    }

    /**
     * Get version
     * @description Get current version 
     * of the eServer installation
     */
    public async getVersion(): Promise<IHeliosStringResult> {
        return this.request("GetEServerVersion", undefined, { method: HeliosRequestMethod.Get });
    }

    /**
     * Make a request
     * @param runtime 
     * @param method 
     * @param config 
     * @param params 
     * @param response 
     */
    public async request<TParams extends IHeliosParams, TResult extends IHeliosResult>(method: string, params?: TParams, config?: IHeliosRequestConfig): Promise<TResult> {
        // Parse config
        const rConfig = await this.parseRequestConfig(config);

        // Init result
        let result: TResult;

        // Check for request method
        switch (rConfig.method) {
            // Get method
            case HeliosRequestMethod.Get:
                // Execute get method
                result = await this.get<TParams, TResult>(method, params, config);
                break;

            // Unknown
            default:
                throw new Error(`[@calf/helios@ExecuteService]: Invalid request method: '${rConfig.method}'. Only '${HeliosRequestMethod.Get}' are valid values for eServer service. Use of 'HeliosRequestMethod' is recommended.`);
        }

        // Emit result
        this.resultSource.next(result);

        // Return result
        return result;
    }

    /**
     * Get
     * @description Make a get request for given
     * runtime, using given method and passing
     * given data as parameters.
     * @param method 
     * @param params
     * @param config
     */
    private async get<TParams extends IHeliosParams, TResult extends IHeliosResult>(method: string, params?: TParams, config?: IHeliosRequestConfig): Promise<TResult> {
        // Build url
        const url = this.buildGetRequestUrl(method, params);

        // Get headers
        const headers = await this.parseRequestConfigHeaders(config);

        // Fetch response
        const rResponse = await fetch(url, { method: "get", headers: headers });

        // Parse response into json
        return this.parseResponse<TResult>(rResponse);
    }

    /**
     * Build get request url
     * @param method 
     * @param params 
     */
    private buildGetRequestUrl<TParams>(method: string, params: TParams): string {
        // Init segments
        const segments: string[] = [];

        // Get target
        const target: string = `${HeliosConfig.host}:${HeliosConfig.port}`;

        // Check for ssl
        if (HeliosConfig.ssl) {
            // Http protocol with ssl
            segments.push(`https://${target}`);
        }
        else {
            // Http protocol
            segments.push(`http://${target}`);
        }

        // Check for host path
        if (HeliosConfig.hostPath) {
            // Add host path
            segments.push(HeliosConfig.hostPath);
        }

        // Add segments for the service
        segments.push("datasnap", "rest", "THeliosMethods");

        // Add method name
        segments.push(method);

        // Check for params
        if (params && Object.keys(params).length) {
            // Add stringified and encoded params
            segments.push(encodeURIComponent(JSON.stringify(params)));
        }

        // Return request url
        return segments.join("/");
    }

    /**
     * Parse response
     * @param response 
     */
    private async parseResponse<TResult>(response: Response): Promise<TResult> {
        // First get json
        const json = await response.json();

        // Get actual result from json
        return json["result"][0];
    }

    /**
     * Parse request config headers
     * @param headers
     */
    private async parseRequestConfigHeaders(config: IHeliosRequestConfig = {}): Promise<{ [key: string]: string }> {
        // Init default headers
        const defaultHeaders = { "Content-type": "application/json" };

        // Return headers
        return Object.assign({}, defaultHeaders, HeliosConfig.defaultCustomHeaders || {}, config.headers || {});
    }

    /**
     * Parse request config
     * @description Parse request config, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent.
     * @param config 
     */
    private async parseRequestConfig(config: IHeliosRequestConfig = {}): Promise<IHeliosRequestConfig> {
        // Init default config
        const defaultConfig: IHeliosRequestConfig = { method: HeliosRequestMethod.Get };

        // Return config
        return Object.assign<IHeliosRequestConfig, IHeliosRequestConfig, IHeliosRequestConfig>({}, defaultConfig, config);
    }
}