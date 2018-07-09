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
     * Remove entity
     * @param entity 
     * @param args 
     */
    remove(entity: T, ...args: any[]): Promise<T>;

    /**
     * Remove list of entities
     * @param query 
     * @param args 
     */
    removeList(query: IQuery, ...args: any[]): Promise<any>;

    /**
     * Count entities
     * @param args 
     */
    count(...args: any[]): Promise<number>;
}