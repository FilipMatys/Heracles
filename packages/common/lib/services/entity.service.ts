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