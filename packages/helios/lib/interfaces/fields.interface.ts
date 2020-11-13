/**
 * Helios result fields
 */
export interface IHeliosResultFields<TResult = any> {

    /**
     * Version
     * @description Helios runtime version
     */
    Version?: string;

    /**
     * Method
     * @description Name of the method 
     * that is returning the result
     */
    Method?: string;

    /**
     * IsError
     * @description Error flag
     */
    IsError?: boolean;

    /**
     * ErrorMessage
     * @description Message describing the error
     */
    ErrorMessage?: string;

    /**
     * ResultType
     * @description Type of result
     */
    ResultType?: string;

    /**
     * Result
     * @description Actual result value
     */
    Result?: TResult;
}