// Classes
import { ISerializable } from "../classes/serializable.class";

// Interfaces
import { IQuery } from "../interfaces";

/**
 * Entity dao
 * @description 
 */
export interface IEntityDao<T extends ISerializable> {

    /**
     * Save entity
     * @param entity 
     * @param args
     */
    save(entity: T, ...args: any[]): Promise<T>;

    /**
     * Get entity
     * @param entity 
     * @param args 
     */
    get(entity: T, ...args: any[]): Promise<T>;

    /**
     * Get list of entities
     * @param query
     * @param args 
     */
    getList(query: IQuery, ...args: any[]): Promise<T[]>;

    /**
     * Remove
     * @param query 
     * @param args 
     */
    remove(query: IQuery, ...args: any[]): Promise<any>;

    /**
     * Count entities
     * @param query
     * @param args 
     */
    count(query: IQuery, ...args: any[]): Promise<number>;

    /**
     * Update
     * @param query 
     * @param payload 
     * @param args 
     */
    update(query: IQuery, payload: any, ...args: any[]): Promise<any>;
}