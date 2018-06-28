// Classes
import { ISerializable } from "../classes/serializable.class";

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
     * @param args 
     */
    getList(...args: any[]): Promise<T[]>;

    /**
     * Remove entity
     * @param entity 
     * @param args 
     */
    remove(entity: T, ...args: any[]): Promise<T>;
}