// Interfaces
import { IHeliosEntity } from "./entity.interface";

/**
 * Helios database entity
 * @description Interface for database entity
 */
export interface IHeliosDatabaseEntity extends IHeliosEntity {

    /**
     * Sys name
     * @description System name of the database
     */
    SysName: string;

    /**
     * Pub name
     * @description User defined database name
     */
    PubName: string;

    /**
     * Db access
     * @description Whether current user has access
     * to given database
     */
    DbAccess: string;

    /**
     * State
     * @description Whether database is ONLINE
     */
    State: string;

    /**
     * Icon ID
     * @description Database icon identifier
     */
    IconID: string;

    /**
     * Color
     * @description Database color in UInt32
     */
    Color: string;

    /**
     * Color hex
     * @description Database color in Hex
     */
    ColorHex: string;
}