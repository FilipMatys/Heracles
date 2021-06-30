/**
 * Request service
 * @description Abstract class for making requests
 */
export abstract class RequestService {

    /**
     * Get
     * @description Get request
     * @param endpoint 
     */
    public abstract get<TResult>(endpoint: string): Promise<TResult>;

    /**
     * Post
     * @description Post request
     * @param endpoint 
     * @param payload 
     */
    public abstract post<TPayload, TResult>(endpoint: string, payload: TPayload): Promise<TResult>;
}