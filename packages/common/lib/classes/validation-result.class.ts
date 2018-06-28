/**
 * Validation result
 * @description Object being handled between function calls
 */
export class ValidationResult<T, M> {

    // Data
    public data?: T;

    // Is valid flag
    public isValid: boolean;

    // List of errors
    public errors: M[];

    // List of warnings
    public warnings: M[];

    // List of messages
    public messages: M[];

    /**
     * Constructor
     * @param data 
     */
    constructor(data?: T) {
        // Assign data
        this.data = data;

        // Set is valid flag
        this.isValid = true;

        // Init arrays
        this.errors = [];
        this.warnings = [];
        this.messages = [];
    }

    /**
     * Add error
     * @param error 
     */
    public addError(error: M): void {
        // Add error
        this.errors.push(error);

        // Set validation flag
        this.isValid = false;
    }

    /**
     * Add warning
     * @param warning
     */
    public addWarning(warning: M): void {
        // Add warning
        this.warnings.push(warning);
    }

    /**
     * Add message
     * @param message 
     */
    public addMessage(message: M): void {
        // Add message
        this.messages.push(message);
    }

    /**
     * Append validations
     * @param validations 
     */
    public append(...validations: ValidationResult<any, M>[]): boolean {
        // Iterate validations
        validations.forEach((v) => {
            // Update is valid flag
            this.isValid = this.isValid && v.isValid;

            // Concat lists
            this.errors = this.errors.concat(v.errors);
            this.warnings = this.warnings.concat(v.warnings);
            this.messages = this.messages.concat(v.messages);
        });

        // Return current validation flag
        return this.isValid;
    }

    /**
     * Append as warnings
     * @param validations 
     * @description Append validations and converts its errors to warnings. Does not modify validation flag
     */
    public appendAsWarnings(...validations: ValidationResult<any, M>[]): boolean {
        // Iterate validations
        validations.forEach((v) => {
            // Concat lists
            this.warnings = this.warnings.concat(v.warnings, v.errors);
            this.messages = this.messages.concat(v.messages);
        });

        // Return current validation flag
        return this.isValid;
    }

    /**
     * Is true
     * @param selector 
     * @param error 
     */
    public isTrue(selector: (d: T) => boolean, error: M): boolean {
        return this.processResult(selector(this.data as T), error);
    }

    /**
     * Is false
     * @param selector 
     * @param error 
     */
    public isFalse(selector: (d: T) => boolean, error: M): boolean {
        return this.processResult(!selector(this.data as T), error);
    }

    /**
     * Must
     * @param expression 
     * @param error 
     */
    public must(expression: boolean, error: M): boolean {
        return this.processResult(expression, error);
    }

    /**
     * Is defined
     * @param selector 
     * @param error 
     */
    public isDefined(selector: (d: T) => any, error: M): boolean {
        return this.processResult(typeof selector(this.data as T) !== 'undefined', error);
    }

    /**
     * Is not empty
     * @param selector 
     * @param error 
     */
    public isNotEmpty(selector: (d: T) => string | any[], error: M): boolean {
        return this.processResult(!!selector(this.data as T).length, error);
    }

    /**
     * Is defined and not empty
     * @param selector 
     * @param error 
     */
    public isDefinedAndNotEmpty(selector: (d: T) => string | any[], error: M): boolean {
        return this.isDefined(selector, error) && this.isNotEmpty(selector, error);
    }

    /**
     * Contains
     * @param selector 
     * @param value 
     * @param error 
     */
    public contains<V>(selector: (d: T) => string | V[], value: V, error: M): boolean {
        return this.processResult((selector(this.data as T) as V[]).indexOf(value) !== -1, error);
    }

    /**
     * Starts with
     * @param selector 
     * @param substring 
     * @param error 
     */
    public startsWith(selector: (d: T) => string, substring: string, error: M): boolean {
        return this.processResult(selector(this.data as T).startsWith(substring), error);
    }

    /**
     * Ends with
     * @param selector 
     * @param substring 
     * @param error 
     */
    public endsWith(selector: (d: T) => string, substring: string, error: M): boolean {
        return this.processResult(selector(this.data as T).endsWith(substring), error);
    }

    /**
     * Is of length
     * @param selector 
     * @param length 
     * @param error 
     */
    public isOfLength(selector: (d: T) => string | any[], length: number, error: M): boolean {
        return this.processResult(selector(this.data as T).length === length, error);
    }

    /**
     * Is longer
     * @param selector 
     * @param length 
     * @param error 
     */
    public isLonger(selector: (d: T) => string | any[], length: number, error: M): boolean {
        return this.processResult(selector(this.data as T).length > length, error);
    }

    /**
     * Is shorter
     * @param selector 
     * @param length 
     * @param error 
     */
    public isShorter(selector: (d: T) => string | any[], length: number, error: M): boolean {
        return this.processResult(selector(this.data as T).length < length, error);
    }

    /**
     * Is equal
     * @param selector 
     * @param value 
     * @param error 
     */
    public isEqual<V>(selector: (d: T) => V, value: V, error: M): boolean {
        return this.processResult(selector(this.data as T) === value, error);
    }

    /**
     * Is greater
     * @param selector 
     * @param value 
     * @param error 
     */
    public isGreater(selector: (d: T) => number, value: number, error: M): boolean {
        return this.processResult(selector(this.data as T) > value, error);
    }

    /**
     * Is lesser
     * @param selector 
     * @param value 
     * @param error 
     */
    public isLesser(selector: (d: T) => number, value: number, error: M): boolean {
        return this.processResult(selector(this.data as T) < value, error);
    }

    /**
     * Process result
     * @param result 
     * @param message 
     */
    private processResult(result: boolean, message: M): boolean {
        // Add error if result was negative
        !result && this.addError(message);

        // Return result
        return result;
    }
}