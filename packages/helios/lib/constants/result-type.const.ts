/**
 * Helios result type
 * @description Types of Helios result
 */
export abstract class HeliosResultType {

    /**
     * Result
     * @description Final request result
     */
    public readonly Result: string = "hrtResult";

    /**
     * Relogin
     * @description Session ended and needs to
     * be created. 
     */
    public readonly Relogin: string = "hrtRelogin";

    /**
     * Request
     * @description API expecting further parameters
     * to send final answer.
     */
    public readonly Request: string = "hrtRequest";
}