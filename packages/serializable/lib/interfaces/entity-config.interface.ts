// Entity config interface
export interface IEntityConfig {

    /**
     * Whether generate automatic index
     * @default true
     */
    autoIndexId?: boolean;

    /**
     * Whether to generate entity identifier
     * @default true
     */
    _id?: boolean;
}