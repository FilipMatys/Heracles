// External modules
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Serializable, IQuery } from "@calf/serializable";
import { ValidationResult, IQueryResult, EntityService } from "@calf/common";

// Daos
import { FakeDao } from "../daos/fake.dao";

/**
 * Angular service
 */
export abstract class AngularService<TEntity extends Serializable, TMessage> extends EntityService<TEntity, TMessage> {

    // Http client
    protected abstract http: HttpClient;

    // Prefix
    protected prefix: string[];

    // Http options
    protected httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

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
    protected periSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // Create new promise
        return new Promise((resolve, reject) => {
            // Get headers
            this.alterHeaders(this.httpOptions.headers)
                // Send request
                .then((headers) => this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "save"].join("/"), validation.data, {
                    headers: headers
                }).toPromise())
                // Process response
                .then((response) => resolve(response))
                .catch((error) => {
                    // Handle error
                    this.handleHttpError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
    * Peri save hook
    * @param validation
    * @param query 
    * @param args 
    */
    protected periGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {

        // Create new promise
        return new Promise((resolve, reject) => {
            // Get headers
            this.alterHeaders(this.httpOptions.headers)
                // Send request
                .then((headers) => this.http.post<ValidationResult<IQueryResult<TEntity>, TMessage>>([...this.prefix, "list"].join("/"), query, {
                    headers: headers
                }).toPromise())
                // Process response
                .then((response) => resolve(response))
                .catch((error) => {
                    // Handle error
                    this.handleHttpError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
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
    protected periGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // Create new promise
        return new Promise((resolve, reject) => {
            // Get headers
            this.alterHeaders(this.httpOptions.headers)
                // Send request
                .then((headers) => this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "get"].join("/"), validation.data, {
                    headers: headers
                }).toPromise())
                // Process response
                .then((response) => resolve(response))
                .catch((error) => {
                    // Handle error
                    this.handleHttpError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }


    /**
    * Peri save hook
    * @param validation 
    * @param query 
    * @param args 
    */
    protected periRemove(validation: ValidationResult<TEntity, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {

        // Create new promise
        return new Promise((resolve, reject) => {
            // Get headers
            this.alterHeaders(this.httpOptions.headers)
                // Send request
                .then((headers) => this.http.post<ValidationResult<IQueryResult<TEntity>, TMessage>>([...this.prefix, "remove"].join("/"), query, {
                    headers: headers
                }).toPromise())
                // Process response
                .then((response) => resolve(response))
                .catch((error) => {
                    // Handle error
                    this.handleHttpError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
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
        console.log(error);

        // Reject
        return Promise.reject(validation);
    }

    /**
    * Alter headers
    * @param headers
    */
    protected alterHeaders(headers: HttpHeaders): Promise<HttpHeaders> {
        return Promise.resolve(headers);
    }
}