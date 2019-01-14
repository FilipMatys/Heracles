/**
 * Template
 * @description Wrapper for rendering templates, used for 
 * PDFs, emails and other documents. 
 */
export abstract class Template<TData> {

    /**
     * Data
     */
    protected data?: TData;

    /**
     * Path to template
     */
    protected path: string;

    /**
     * Constructor
     * @param path 
     * @param data 
     */
    constructor(path: string, data?: TData) {
        // Assign path and data
        this.path = path;
        this.data = data;
    }

    /**
     * Update data
     * @param data 
     */
    public updateData(data: TData): Promise<void> {
        // Assign data
        this.data = data;

        // Resolve
        return Promise.resolve();
    }

    /**
     * Update path
     * @param path 
     */
    public updatePath(path: string): Promise<void> {
        // Assign path
        this.path = path;

        // Resolve
        return Promise.resolve();
    }

    /**
     * Render template
     * @param args 
     */
    public abstract render(...args: any[]): Promise<string>;
}