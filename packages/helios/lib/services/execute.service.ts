// External modules
import fetch, { Response } from "node-fetch";

// Interfaces
import { IHeliosStringResult } from "../interfaces/string-result.interface";
import { IHeliosRequestConfig } from "../interfaces/request-config.interface";
import { IHeliosLoginParams } from "../interfaces/login-params.interface";
import { IHeliosBooleanResult } from "../interfaces/boolean-result.interface";
import { IHeliosDataSetResult } from "../interfaces/data-set-result.interface";
import { IHeliosRunParams } from "../interfaces/run-params.interface";
import { IHeliosResultFields } from "../interfaces/fields.interface";
import { IHeliosParams } from "../interfaces/params.interface";
import { IHeliosResult } from "../interfaces/result.interface";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

// Classes
import { HeliosConfig } from "../classes/config.class";
import { HeliosRequestPayload } from "../classes/request-payload.class";
import { HeliosRuntime } from "../classes/runtime.class";

/**
 * Execute service
 * @description Service for executing methods
 */
export class ExecuteService {

    /**
     * Login
     * @description Access or create runtime
     * @param runtime 
     * @param params
     * @param config
     */
    public async login(runtime: HeliosRuntime, params: IHeliosLoginParams, config?: IHeliosRequestConfig): Promise<IHeliosStringResult> {
        return this.request(runtime, "Login", params, null, config);
    }

    /**
     * Logout
     * @description Close given runtime
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async logout(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosBooleanResult> {
        return this.request(runtime, "Logout", params, null, config);
    }

    /**
     * Is started
     * @description Check runtime state
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async isStarted(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosBooleanResult> {
        return this.request(runtime, "isStarted", params, null, config);
    }

    /**
     * Get version
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getVersion(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosStringResult> {
        return this.request(runtime, "GetEServerVersion", params, null, config);
    }

    /**
     * Get databases
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getDatabases(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        return this.request(runtime, "GetDatabases", params, null, config);
    }

    /**
     * Run procedure
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runProcedure<TResult>(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        return this.request(runtime, "RunHpx", params, null, config);
    }

    /**
     * Run view
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runView<TResult>(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        return this.request(runtime, "RunHvw", params, null, config);
    }

    /**
     * Run function
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runFunction<TResult>(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        return this.request(runtime, "RunHfx", params, null, config);
    }

    /**
     * Make a request
     * @param runtime 
     * @param method 
     * @param config 
     * @param params 
     * @param response 
     */
    private async request<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Parse config
        const rConfig = await this.parseRequestConfig(config);

        // Check for request method
        switch (rConfig.method) {
            // Get method
            case HeliosRequestMethod.Get:
                // Execute get method
                return this.get<TParams, TResponse, TResult>(runtime, method, params, response, config);

            // Post method
            case HeliosRequestMethod.Post:
                // Execute post method
                return this.post<TParams, TResponse, TResult>(runtime, method, params, response, config);

            // Unknown
            default:
                throw new Error(`[@calf/helios@ExecuteService]: Invalid request method: '${rConfig.method}'. Only '${HeliosRequestMethod.Get}' and '${HeliosRequestMethod.Post}' are valid values. Use of 'HeliosRequestMethod' is recommended.`);
        }
    }

    /**
     * Get
     * @description Make a get request for given
     * runtime, using given method and passing
     * given data as parameters.
     * @param runtime 
     * @param method 
     * @param params
     * @param response 
     * @param config
     */
    private async get<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Make sure params contain basic values
        const rParams = await this.parseRequestParams(params || {});

        // Build url
        const url = this.buildGetRequestUrl(runtime, method, rParams, response);

        // Get headers
        const headers = await this.parseRequestConfigHeaders(config);

        // Fetch response
        const rResponse = await fetch(url, { method: "get", headers: headers });

        // Parse response into json
        return this.parseResponse<TResult>(rResponse);
    }

    /**
     * Post
     * @description Make a post request for given
     * runtime, using given method and passing
     * given params and response.
     * @param runtime 
     * @param method 
     * @param params
     * @param response
     * @param config
     */
    private async post<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Make sure params contain basic values
        const rParams = await this.parseRequestParams(params || {});

        // Build url
        const url = this.buildPostRequestUrl(runtime, method);

        // Get request payload
        const payload = new HeliosRequestPayload(rParams, response);

        // Get headers
        const headers = await this.parseRequestConfigHeaders(config);

        // Fetch response
        const rResponse = await fetch(url, { method: "post", body: JSON.stringify(payload), headers: headers });

        // Parse response into json
        return this.parseResponse<TResult>(rResponse);
    }

    /**
     * Build get request url
     * @param runtime 
     * @param method 
     * @param params 
     * @param response
     */
    private buildGetRequestUrl<TParams, TResponse>(runtime: HeliosRuntime, method: string, params: TParams, response: TResponse): string {
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

        // Add segments for the execute service
        segments.push("datasnap", "rest", "THeliosMethods", "Execute");

        // Add runtime hash to segments
        segments.push(runtime.hash || "null");

        // Add method name
        segments.push(method);

        // Check for params
        if (params && Object.keys(params).length) {
            // Add stringified and encoded params
            segments.push(encodeURIComponent(JSON.stringify(params)));
        }

        // Check for response
        if (response && Object.keys(response).length) {
            // Add stringified and encoded response
            segments.push(encodeURIComponent(JSON.stringify(response)));
        }

        // Return request url
        return segments.join("/");
    }

    /**
     * Build post request url
     * @param runtime 
     * @param method 
     */
    private buildPostRequestUrl(runtime: HeliosRuntime, method: string): string {
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

        // Add segments for the execute service
        segments.push("datasnap", "rest", "THeliosMethods", encodeURIComponent(`"Execute"`));

        // Add runtime hash to segments
        segments.push(runtime.hash || "null");

        // Add method name
        segments.push(method);

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

    /**
     * Parse request params
     * @description Parse request params, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent. 
     * @param params 
     */
    private async parseRequestParams<TParams extends IHeliosParams>(params: TParams): Promise<TParams> {
        // Init default config
        const defaultParams: IHeliosParams = { Version: HeliosConfig.version };

        // Return params
        return Object.assign<TParams, IHeliosParams, TParams>({} as any, defaultParams, params || ({} as any));
    }
}