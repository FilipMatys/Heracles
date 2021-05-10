// Interfaces
import { IHeliosGetBrowseSpecialParams } from "../interfaces/params/get-browse-special.interface";
import { IHeliosChangeDatabaseParams } from "../interfaces/params/change-database.interface";
import { IHeliosExternalActionParams } from "../interfaces/params/external-action.interface";
import { IHeliosGetBrowseParams } from "../interfaces/params/get-browse.interface";
import { IHeliosBrowseResult } from "../interfaces/results/browse.interface";
import { IHeliosStringResult } from "../interfaces/results/string.interface";
import { IHeliosRequestConfig } from "../interfaces/configs/request.interface";
import { IHeliosLoginParams } from "../interfaces/params/login.interface";
import { IHeliosBooleanResult } from "../interfaces/results/boolean.interface";
import { IHeliosDataSetResult } from "../interfaces/results/data-set.interface";
import { IHeliosDialogResult } from "../interfaces/results/dialog.interface";
import { IHeliosRunParams } from "../interfaces/params/run.interface";
import { IHeliosResultFields } from "../interfaces/fields.interface";
import { IHeliosParams } from "../interfaces/params/params.interface";
import { IHeliosResult } from "../interfaces/results/result.interface";

// Classes
import { HeliosRuntime } from "../classes/runtime.class";

// Services
import { RequestService } from "./request.service";
import { HeliosConfig } from "../classes/config.class";

/**
 * Execute service
 * @description Service for executing methods
 */
export class ExecuteService extends RequestService {

    // Set endpoint
    protected readonly ENDPOINT: string[] = ["Execute"];

    // Runtime dependency flag
    protected readonly isRuntimeDependent: boolean = true;

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
     * Get version
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getVersion(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosStringResult> {
        return this.request(runtime, "GetEServerVersion", params, null, config);
    }

    /**
     * Get main tree
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getMainTree(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        return this.request(runtime, "GetMainTree", params, null, config);
    }

    /**
     * Get navigation tree
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getNavigationTree(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        return this.request(runtime, "GetNavigationTree", params, null, config);
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
     * Get browse
     * @param runtime 
     * @param params 
     * @param response 
     * @param config 
     */
    public async getBrowse(runtime: HeliosRuntime, params: IHeliosGetBrowseParams, response: any, config?: IHeliosRequestConfig): Promise<IHeliosBrowseResult> {
        return this.request(runtime, "GetBrowse", params, response, config);
    }

    /**
     * Get browse
     * @param runtime 
     * @param params 
     * @param response 
     * @param config 
     */
    public async getBrowseSpecial(runtime: HeliosRuntime, params: IHeliosGetBrowseSpecialParams, response: any, config?: IHeliosRequestConfig): Promise<IHeliosBrowseResult> {
        return this.request(runtime, "GetBrowseSpecial", params, response, config);
    }

    /**
     * Change database
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async changeDatabase(runtime: HeliosRuntime, params: IHeliosChangeDatabaseParams, config?: IHeliosRequestConfig): Promise<IHeliosDialogResult> {
        return this.request(runtime, "ChangeDatabase", params, null, config);
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
    public async runView(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
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
     * Run external action
     * @param runtime 
     * @param params 
     * @param response
     * @param config 
     * @returns 
     */
    public async runExternalAction<TResult>(runtime: HeliosRuntime, params: IHeliosExternalActionParams, response: any, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        return this.request(runtime, "RunExternalAction", params, response, config);
    }

    /**
     * Parse request params
     * @description Parse request params, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent. 
     * @param params 
     */
    protected async parseRequestParams<TParams extends IHeliosParams>(params: TParams): Promise<TParams> {
        // Call super with default params
        return super.parseRequestParams(params, { Version: HeliosConfig.version });
    }
}