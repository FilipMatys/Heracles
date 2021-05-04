// Interfaces
import { IGroups } from "./groups.interface";

/**
 * List
 * @description Interface for list
 */
export interface IList {
    id?: number;
    name: string;
    from_name?: string;
    from_email?: string;
    reply_to?: string;
    sub_success_page?: string;
    sub_confirmed_page?: string;
    unsub_page?: string;
    double_optin?: string;
    conf_subject?: string;
    conf_message?: string;
    groups?: IGroups;
}