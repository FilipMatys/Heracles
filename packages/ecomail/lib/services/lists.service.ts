// Interfaces
import { IList } from "../interfaces/list.interface";
import { ICallbackFn } from "../interfaces/callback.interface";

// Services
import { RequestService } from "./request.service";
import { ISubscriber } from "../interfaces/subscriber.interface";

/**
 * Lists service
 * @description Service to handle List entities
 */
export class ListsService extends RequestService {

    /**
     * Base
     * @description Base for list entities
     */
    protected base: string[] = ["lists"];

    /**
     * Get lists
     * @description Get list of lists
     * @param callback
     */
    public async list(callback?: ICallbackFn<IList[]>): Promise<IList[]> {
        // Make get request
        return this.get(this.base, null, callback);
    }

    /**
     * Create list
     * @description Create new list
     * @param list 
     * @param callback 
     */
    public async create(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make post request
        return this.post(this.base, list, callback);
    }

    /**
     * Show list
     * @description Load list
     * @param list Needs to have id defined
     * @param callback
     */
    public async show(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make get request
        return this.get([...this.base, `${list.id}`], null, callback);
    }

    /**
     * Update list
     * @description Update existing list
     * @param list 
     * @param callback 
     */
    public async update(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make put request
        return this.put(this.base, list, callback);
    }

    /**
     * Get subscribers
     * @description Get subscribers for given list
     * @param list Needs to have id defined
     * @param callback 
     * @returns 
     */
    public async subscribers<TCustomFields>(list: IList, callback?: ICallbackFn<any>): Promise<any> {
        // Make get request
        return this.get([...this.base, `${list.id}`, "subscribers"], null, callback);
    }

    /**
     * Subscriber
     * @description Get subscriber from given list
     * @param list Needs to have id defined
     * @param subscriber Needs to have email defined
     * @param callback 
     */
    public async subscriber<TCustomFields>(list: IList, subscriber: ISubscriber<TCustomFields>, callback?: ICallbackFn<any>): Promise<any> {
        // Make get request
        return this.get([...this.base, `${list.id}`, "subscribers", `${subscriber.email}`], null, callback);
    }
}