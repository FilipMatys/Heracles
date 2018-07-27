// External modules
import { ISerializable, IEntityDao, IQuery } from "@calf/serializable";

// Classes
import { ValidationResult } from "../classes/validation-result.class";

// Interfaces
import { IQueryResult } from "../interfaces/query-result.interface";

/**
 * Entity service
 */
export abstract class EntityService<T extends ISerializable, M> {

    /**
     * Constructor
     * @param dao 
     */
    constructor(protected dao: IEntityDao<T>) { }

    /**
     * Save entity
     * @param entity 
     * @param args 
     */
    public save(entity: T, ...args: any[]): Promise<ValidationResult<T, M>> {
        // Init validation
        const validation = new ValidationResult<T, M>(entity);

        // Create new promise
        return new Promise<ValidationResult<T, M>>((resolve) => {
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
    protected preSave(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri save hook
     * @param validation 
     * @param args 
     */
    protected periSave(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.save(validation.data as T, ...args)
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
    protected postSave(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Get entity
     * @param entity 
     * @param args 
     */
    protected get(entity: T, ...args: any[]): Promise<ValidationResult<T, M>> {
        // Init validation
        const validation = new ValidationResult<T, M>(entity);

        // Create new promise
        return new Promise<ValidationResult<T, M>>((resolve) => {
            // Call pre get hook
            this.preGet(validation, ...args)
                // Call peri get
                .then((validation) => this.periGet(validation, ...args))
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
    protected preGet(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get hok
     * @param validation 
     * @param args 
     */
    protected periGet(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.get(validation.data as T, ...args)
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
    protected postGet(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Get list of entities
     * @param query 
     * @param args 
     */
    public getList(query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<T>, M>> {
        // Init validation
        const validation = new ValidationResult<IQueryResult<T>, M>({
            items: [],
            total: 0,
            pageSize: query.limit,
            page: Math.round((query.skip) || 0 / (query.limit || 1)) + 1
        });

        // Create new promise
        return new Promise<ValidationResult<IQueryResult<T>, M>>((resolve) => {
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
    protected preGetList(validation: ValidationResult<IQueryResult<T>, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<T>, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get list hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periGetList(validation: ValidationResult<IQueryResult<T>, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<T>, M>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // First get list
            this.dao.getList(query, ...args)
                .then((items) => {
                    // Assign items
                    (validation.data as IQueryResult<T>).items = items;

                    // Now get total count
                    return this.dao.count({
                        filter: query.filter,
                        term: query.term
                    });
                })
                .then((total) => {
                    // Assign total
                    (validation.data as IQueryResult<T>).total = total;

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
    protected postGetList(validation: ValidationResult<IQueryResult<T>, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<T>, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Remove
     * @param query 
     * @param args 
     */
    public remove(query: IQuery, ...args: any[]): Promise<ValidationResult<any, M>> {
        // Init validation
        const validation = new ValidationResult<any, M>();

        // Create new promise
        return new Promise<ValidationResult<any, M>>((resolve) => {
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
    protected preRemove(validation: ValidationResult<any, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periRemove(validation: ValidationResult<any, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, M>> {
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
    protected postRemove(validation: ValidationResult<any, M>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Change state
     * @param entity 
     * @param args 
     */
    public changeState(entity: T, ...args: any[]): Promise<ValidationResult<T, M>> {
        // Init validation
        const validation = new ValidationResult<T, M>(entity);

        // Create new promise
        return new Promise<ValidationResult<T, M>>((resolve) => {
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
    protected preChangeState(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri change state
     * @param validation 
     * @param args 
     */
    protected periChangeState(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        throw new Error("[@calf:entity.service] Change state not implemented!");
    }

    /**
     * Post change state
     * @param validation 
     * @param args 
     */
    protected postChangeState(validation: ValidationResult<T, M>, ...args: any[]): Promise<ValidationResult<T, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Update 
     * @param query 
     * @param payload 
     * @param args 
     */
    public update(query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, M>> {
        // Init validation
        const validation = new ValidationResult<any, M>();

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
    protected preUpdate(validation: ValidationResult<any, M>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected periUpdate(validation: ValidationResult<any, M>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, M>> {
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
    protected postUpdate(validation: ValidationResult<any, M>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, M>> {
        return Promise.resolve(validation);
    }

    /**
     * Handle update error
     * @param validation 
     * @param error 
     */
    protected handleUpdateError<E>(validation: ValidationResult<T, M>, error: E): Promise<ValidationResult<T, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle change state error
     * @param validation 
     * @param error 
     */
    protected handleChangeStateError<E>(validation: ValidationResult<T, M>, error: E): Promise<ValidationResult<T, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle save error
     * @param error 
     */
    protected handleSaveError<E>(validation: ValidationResult<T, M>, error: E): Promise<ValidationResult<T, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle get error
     * @param validation 
     * @param error 
     */
    protected handleGetError<E>(validation: ValidationResult<T, M>, error: E): Promise<ValidationResult<T, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle get list error
     * @param validation 
     * @param error 
     */
    protected handleGetListError<E>(validation: ValidationResult<IQueryResult<T>, M>, error: E): Promise<ValidationResult<IQueryResult<T>, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle remove error
     * @param validation 
     * @param error 
     */
    protected handleRemoveError<E>(validation: ValidationResult<any, M>, error: E): Promise<ValidationResult<any, M>> {
        return this.handleDaoError<E>(validation, error);
    }

    /**
     * Handle dao error
     * @param validation 
     * @param error 
     */
    protected handleDaoError<E>(validation: ValidationResult<any, M>, error: E): Promise<ValidationResult<any, M>> {
        // Log error
        console.log(error);

        // Reject
        return Promise.reject(validation);
    }
}