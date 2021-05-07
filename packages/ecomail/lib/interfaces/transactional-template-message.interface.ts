// Interfaces
import { IMessage } from "./message.interface";

/**
 * Transactional template message
 */
export interface ITransactionalTemplateMessage extends IMessage {

    template_id: number;
}