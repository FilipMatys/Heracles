// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { ITransactionalMessage } from "../interfaces/transactional-message.interface";
import { ITransactionalTemplateMessage } from "../interfaces/transactional-template-message.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Transactional service
 */
export class TransactionalService extends RequestService {

    /**
     * Base
     * @description Base for transactional entities
     */
    protected base: string[] = ["transactional"];

    /**
     * Send message
     * @param message 
     * @param callback 
     */
    public async sendMessage(message: ITransactionalMessage, callback?: ICallbackFn<any>): Promise<any> {
        return this.post([...this.base, "send-message"], message, callback);
    }

    /**
     * Send template
     * @param template 
     * @param callback 
     */
    public async sendTemplate(template: ITransactionalTemplateMessage, callback?: ICallbackFn<any>): Promise<any> {
        return this.post([...this.base, "send-template"], template, callback);
    }
}