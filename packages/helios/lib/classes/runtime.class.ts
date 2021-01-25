// Classes
import { HeliosConfig } from "../classes/config.class";

/**
 * Runtime
 * @description Helios runtime
 */
export class HeliosRuntime {

    /**
     * Create runtime
     * @param hash 
     */
    public static create(hash?: string): HeliosRuntime {
        // Create runtime instance
        return new this(hash);
    }

    /**
     * Hash
     * @description Has getter
     */
    public get hash(): string {
        return this._hash;
    }

    /**
     * Created at
     * @description Created at getter
     */
    public get createdAt(): Date {
        return this._createdAt;
    }

    /**
     * Expires at
     * @description Expires at getter
     */
    public get expiresAt(): Date {
        return this._expiresAt;
    }

    /**
     * Hash
     * @description Unique identifier
     * to identify runtime
     */
    private _hash: string;

    /**
     * Created at
     * @description Date the runtime was created
     */
    private _createdAt: Date;

    /**
     * Expires at
     * @description 
     */
    private _expiresAt: Date;

    /**
     * Constructor
     * @param hash 
     */
    private constructor(hash?: string) {
        // Check if hash is set
        if (hash) {
            // Assign hash
            this._hash = hash;
        }

        // Init created at and updated at
        this._createdAt = new Date();

        // Calculate expiration date
        this._expiresAt = this.getExpirationDate();
    }

    /**
     * Get expiration date
     */
    private getExpirationDate(): Date {
        // Add runtime timeout to created at date
        return new Date(this._createdAt.getTime() + HeliosConfig.runtimeTimeout);
    }
}