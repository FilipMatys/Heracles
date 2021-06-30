/**
 * ComGate config
 * @description Interface for ComGate configuration
 */
export interface IComGateConfig {

    /**
     * URL
     * @description Terminal URL
     */
    url?: string;

    /**
     * Port
     * @description Terminal port
     */
    port?: number;

    /**
     * Password
     * @description Terminal password
     */
    password?: string;
}