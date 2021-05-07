// Interfaces
import { IGlobalMergeVar } from "./global-merge-var.interface";
import { IMessageAttachment } from "./message-attachment.interface";
import { IMessageMetadata } from "./message-metadata.interface";
import { IRecipient } from "./recipient.interface";

/**
 * Message
 * @description Interface for message
 */
export interface IMessage {

    subject: string;

    from_name: string;

    from_email: string;

    reply_to?: string;

    to: IRecipient[];

    global_merge_vars: IGlobalMergeVar[];

    metadata?: IMessageMetadata[];

    attachments?: IMessageAttachment[];
}