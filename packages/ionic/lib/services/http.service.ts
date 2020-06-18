// External modules
import { Serializable } from "@calf/serializable";
import { EntityService, ValidationResult, IQueryResult, IQuery } from "@calf/common";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

// Daos
import { FakeDao } from "../daos/fake.dao";

/**
 * Http service
 * @description Http service using native HTTP module
 */
export abstract class HttpService<TEntity extends Serializable, TMessage = string> extends EntityService<TEntity, TMessage> {

    /**
     * Http provider
     */
    protected abstract http: HTTP;

    /**
     * Serializer
     */
    protected serializer: "json" | "urlencoded" | "utf8" | "multipart" = "json";

    /**
     * Path prefix
     * @description If calling remote service make
     * sure the host is part of the prefix
     */
    protected prefix: string[] = [];

    /**
     * Headers
     */
    protected headers: Headers = new Headers({
        "Content-Type": "application/json"
    });

    /**
     * Constructor
     * @param prefix 
     */
    constructor(prefix: string[]) {
        // Call super to create fake dao
        super(new FakeDao());

        // Assign prefix
        this.prefix = prefix;
    }

    /**
     * Peri save hook
     * @param validation 
     * @param args 
     */
    protected async periSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.headers);

        // Set serializer
        this.http.setDataSerializer(this.serializer);

        try {
            // Make request
            const response = await this.http.post([...this.prefix, "save"].join("/"), validation.data, headers);

            // Extract data
            Object.assign(validation, this.extractData<TEntity>(response));

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleSaveError(validation, error);
        }
    }

    /**
    * Peri get list hook
    * @param validation
    * @param query 
    * @param args 
    */
    protected async periGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.headers);

        // Set serializer
        this.http.setDataSerializer(this.serializer);

        try {
            // Make request
            const response = await this.http.post([...this.prefix, "list"].join("/"), query, headers);

            // Extract data
            Object.assign(validation, this.extractData<IQueryResult<TEntity>>(response));

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleGetListError(validation, error);
        }
    }

    /**
     * Get detail of entity
     * @param entity 
     */
    public get(entity: TEntity): Promise<ValidationResult<TEntity, TMessage>> {
        return super.get(entity, []);
    }

    /**
     * Peri get hook
     * @param validation 
     * @param args 
     */
    protected async periGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.headers);

        // Set serializer
        this.http.setDataSerializer(this.serializer);

        try {
            // Make request
            const response = await this.http.post([...this.prefix, "get"].join("/"), validation.data, headers);

            // Extract data
            Object.assign(validation, this.extractData<TEntity>(response));

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleGetError(validation, error);
        }
    }

    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected async periRemove(validation: ValidationResult<TEntity, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.headers);

        // Set serializer
        this.http.setDataSerializer(this.serializer);

        try {
            // Make request
            const response = await this.http.post([...this.prefix, "remove"].join("/"), query, headers);
        
            // Extract data
            Object.assign(validation, this.extractData<TEntity>(response));

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleRemoveError(validation, error);
        }
    }

    /**
     * Handle update error
     * @param validation 
     * @param error 
     */
    protected handleUpdateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle change state error
     * @param validation 
     * @param error 
     */
    protected handleChangeStateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle save error
     * @param error 
     */
    protected handleSaveError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle get error
     * @param validation 
     * @param error 
     */
    protected handleGetError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle get list error
     * @param validation 
     * @param error 
     */
    protected handleGetListError<TError>(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, error: TError): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle remove error
     * @param validation 
     * @param error 
     */
    protected handleRemoveError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle http error
     * @param validation 
     * @param error 
     */
    protected handleHttpError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        // Log error
        console.log(JSON.stringify(error));

        // Reject
        return Promise.reject(validation);
    }

    /**
     * Extract data
     * @param response 
     */
    protected extractData<TResult>(response: HTTPResponse): ValidationResult<TResult, TMessage> {
        return Object.assign(new ValidationResult<TResult, TMessage>(), JSON.parse(response.data));
    }

    /**
     * Alter headers
     * @param headers
     */
    protected alterHeaders(headers: Headers): Promise<Headers> {
        return Promise.resolve(Object.assign({}, headers));
    }
}
