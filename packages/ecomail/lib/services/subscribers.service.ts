// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { ISubscriberResponse } from "../interfaces/subscriber-response.interface";
import { ISubscriber } from "../interfaces/subscriber.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Subscribers service
 * @description Service to handle Subscriber entities
 */
export class SubscribersService extends RequestService {

    /**
     * Base
     * @description Base for subscriber entities
     */
    protected base: string[] = ["subscribers"];

    /**
     * Show subscriber
     * @description Load subscriber
     * @param list Needs to have id defined
     * @param callback
     */
    public async show<TCustomFields>(subscriber: ISubscriber<TCustomFields>, callback?: ICallbackFn<ISubscriberResponse<TCustomFields>>): Promise<ISubscriberResponse<TCustomFields>> {
        // Make get request
        return this.get([...this.base, `${subscriber.email}`], null, callback);
    }

    /**
     * Remove subscriber
     * @param subscriber 
     * @param callback 
     * @returns 
     */
    public async remove(subscriber: ISubscriber<any>, callback?: ICallbackFn<any>): Promise<any> {
        // Make delete request
        return this.delete([...this.base, `${subscriber.email}`, "delete"], subscriber, callback);
    }
}