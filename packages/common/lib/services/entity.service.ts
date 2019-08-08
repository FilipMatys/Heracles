// External modules
import { IEntityDao, IQuery, Serializable, IPopulate } from "@calf/serializable";

// Classes
import { ValidationResult } from "../classes/validation-result.class";

// Interfaces
import { IQueryResult } from "../interfaces/query-result.interface";

/**
 * Entity service
 */
export abstract class EntityService<TEntity extends Serializable, TMessage> {

    /**
     * Constructor
     * @param dao 
     */
    constructor(protected dao: IEntityDao<TEntity>) { }

    /**
     * Save entity
     * @param entity 
     * @param args 
     */
    public save(entity: TEntity, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        // Create new promise
        return new Promise<ValidationResult<TEntity, TMessage>>((resolve) => {
            // Call pre save hook
            this.preSave(validation, ...args)
                // Call peri save
                .then((validation) => this.periSave(validation, ...args))
                // Call post save
                .then((validation) => this.postSave(validation, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre save hook
     * @param validation 
     * @param args 
     */
    protected preSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri save hook
     * @param validation 
     * @param args 
     */
    protected periSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.save(validation.data as TEntity, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle save error
                    this.handleSaveError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post save hook
     * @param validation 
     * @param args 
     */
    protected postSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Count entity
     * @param query 
     * @param args 
     */
    public count(query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        // Init validation
        const validation = new ValidationResult<number, TMessage>(0);

        // Create new promise
        return new Promise<ValidationResult<number, TMessage>>((resolve) => {
            // Call pre count hook
            this.preCount(validation, query, ...args)
                // Call peri count
                .then((validation) => this.periCount(validation, query, ...args))
                // Call post count
                .then((validation) => this.postCount(validation, query, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre count hook
     * @param validation
     * @param query
     * @param args 
     */
    protected preCount(validation: ValidationResult<number , TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri count hook
     * @param validation 
     * @param args 
     */
    protected periCount(validation: ValidationResult<number , TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.count(query, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle count error
                    this.handleCountError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post count hook
     * @param validation 
     * @param query
     * @param args 
     */
    protected postCount(validation: ValidationResult<number , TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Get entity
     * @param entity 
     * @param populate
     * @param args 
     */
    public get(entity: TEntity, populate: IPopulate[], ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        // Create new promise
        return new Promise<ValidationResult<TEntity, TMessage>>((resolve) => {
            // Call pre get hook
            this.preGet(validation, ...args)
                // Call peri get
                .then((validation) => this.periGet(validation, populate, ...args))
                // Call post get
                .then((validation) => this.postGet(validation, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre get hook
     * @param validation 
     * @param args 
     */
    protected preGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get hok
     * @param validation 
     * @param args 
     */
    protected periGet(validation: ValidationResult<TEntity, TMessage>, populate: IPopulate[], ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.get(validation.data as TEntity, populate, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle get error
                    this.handleGetError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post get hook
     * @param validation 
     * @param args 
     */
    protected postGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Get list of entities
     * @param query 
     * @param args 
     */
    public getList(query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        // Init validation
        const validation = new ValidationResult<IQueryResult<TEntity>, TMessage>({
            items: [],
            total: 0,
            pageSize: query.limit,
            page: Math.round((query.skip) || 0 / (query.limit || 1)) + 1
        });

        // Create new promise
        return new Promise<ValidationResult<IQueryResult<TEntity>, TMessage>>((resolve) => {
            // Call pre get list hook
            this.preGetList(validation, query, ...args)
                // Call peri get list hook
                .then((validation) => this.periGetList(validation, query, ...args))
                // Call post get list hook
                .then((validation) => this.postGetList(validation, query, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre get list hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected preGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get list hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // First get list
            this.dao.getList(query, ...args)
                .then((items) => {
                    // Assign items
                    (validation.data as IQueryResult<TEntity>).items = items;

                    // Now get total count
                    return this.dao.count({
                        filter: query.filter,
                        term: query.term
                    });
                })
                .then((total) => {
                    // Assign total
                    (validation.data as IQueryResult<TEntity>).total = total;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle get error
                    this.handleGetListError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post get list
     * @param validation 
     * @param query 
     * @param args 
     */
    protected postGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Remove
     * @param query 
     * @param args 
     */
    public remove(query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Init validation
        const validation = new ValidationResult<any, TMessage>();

        // Create new promise
        return new Promise<ValidationResult<any, TMessage>>((resolve) => {
            // Call pre remove hook
            this.preRemove(validation, query, ...args)
                // Call peri remove hook
                .then((validation) => this.periRemove(validation, query, ...args))
                // Call post remove hook
                .then((validation) => this.postRemove(validation, query, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected preRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Remove 
            this.dao.remove(query, ...args)
                .then((result) => {
                    // Assign Data
                    validation.data = result;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle error
                    this.handleRemoveError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected postRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Change state
     * @param entity 
     * @param args 
     */
    public changeState(entity: TEntity, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        // Create new promise
        return new Promise<ValidationResult<TEntity, TMessage>>((resolve) => {
            // Call pre change state hook
            this.preChangeState(validation, ...args)
                // Call peri change state
                .then((validation) => this.periChangeState(validation, ...args))
                // Call post change state
                .then((validation) => this.postChangeState(validation, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre change state hook
     * @param validation 
     * @param args 
     */
    protected preChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri change state
     * @param validation 
     * @param args 
     */
    protected periChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        throw new Error("[@calf:entity.service] Change state not implemented!");
    }

    /**
     * Post change state
     * @param validation 
     * @param args 
     */
    protected postChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Update 
     * @param query 
     * @param payload 
     * @param args 
     */
    public update(query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Init validation
        const validation = new ValidationResult<any, TMessage>();

        // Create new promise
        return new Promise((resolve) => {
            // Call pre update hook
            this.preUpdate(validation, query, payload, ...args)
                // Call peri update hook
                .then((validation) => this.periUpdate(validation, query, payload, ...args))
                // Call post update hook
                .then((validation) => this.postUpdate(validation, query, payload, ...args))
                // Resolve
                .then((validation) => resolve(validation))
                // Catch and resolve
                .catch((validation) => resolve(validation));
        });
    }

    /**
     * Pre update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected preUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected periUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Update
            this.dao.update(query, payload, ...args)
                .then((result) => {
                    // Assign Data
                    validation.data = result;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle error
                    this.handleUpdateError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected postUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Handle update error
     * @param validation 
     * @param error 
     */
    protected handleUpdateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle change state error
     * @param validation 
     * @param error 
     */
    protected handleChangeStateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle save error
     * @param error 
     */
    protected handleSaveError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle get error
     * @param validation 
     * @param error 
     */
    protected handleGetError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle count error
     * @param validation 
     * @param error 
     */
    protected handleCountError<TError>(validation: ValidationResult<number, TMessage>, error: TError): Promise<ValidationResult<number, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle get list error
     * @param validation 
     * @param error 
     */
    protected handleGetListError<TError>(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, error: TError): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle remove error
     * @param validation 
     * @param error 
     */
    protected handleRemoveError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle dao error
     * @param validation 
     * @param error 
     */
    protected handleDaoError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        // Log error
        console.log(error);

        // Reject
        return Promise.reject(validation);
    }
}