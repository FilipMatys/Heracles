// External modules
import { IEntityDao, Serializable, IQuery, IPopulate } from '@calf/serializable';

/**
 * Fake dao
 */
export class FakeDao<T extends Serializable> implements IEntityDao<T> {
    
    public save(entity: T, ...args: any[]): Promise<T> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }    
    
    public get(entity: T, populate: IPopulate[], ...args: any[]): Promise<T> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public getList(query: IQuery, ...args: any[]): Promise<T[]> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public remove(query: IQuery, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public count(query: IQuery, ...args: any[]): Promise<number> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public update(query: IQuery, payload: any, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
}