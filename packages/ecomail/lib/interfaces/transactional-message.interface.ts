// Interfaces
import { IMessageOptions } from "./message-options.interface";
import { IMessage } from "./message.interface";

/**
 * Transactional message
 */
export interface ITransactionalMessage extends IMessage {

    text?: string;

    html?: string;

    amp_html?: string;

    options?: IMessageOptions;
}