// External modules
import { Router, NextFunction, Request, Response } from "express";
import { EntityService, ValidationResult, IQuery } from "@calf/common";

/**
 * Routes
 */
export abstract class Routes<TEntity, TMessage> {

    // Router
    protected router: Router;

    // Prefix
    protected prefix: string[];

    // Service
    protected service: EntityService<TEntity, TMessage>;

    /**
     * Constructor
     * @param router 
     * @param prefix
     */
    constructor(router: Router, prefix: string[]) {
        // Assign router
        this.router = router;

        // Assign prefix
        this.prefix = prefix;
    }

    /**
     * Create Save route
     */
    public createSaveRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Save route
        this.router.post(["", ...this.prefix, "save"].join("/"), this.saveMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.save(req.body as TEntity, ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Create Get route
     */
    public createGetRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Get route
        this.router.post(["", ...this.prefix, "get"].join("/"), this.getMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.get(req.body as TEntity, [], ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Create Single route
     */
    public createSingleRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Get list route
        this.router.post(["", ...this.prefix, "single"].join("/"), this.singleMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.single(req.body as IQuery, ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Create GetList route
     */
    public createGetListRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Get list route
        this.router.post(["", ...this.prefix, "list"].join("/"), this.getListMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.getList(req.body as IQuery, ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Create Remove route
     */
    public createRemoveRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Remove route
        this.router.post(["", ...this.prefix, "remove"].join("/"), this.removeMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.remove(req.body as IQuery, ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Create change state route
     */
    public createChangeStateRoute(): void {
        // Make sure service is defined
        this.ensureServiceDefinition();

        // Remove route
        this.router.post(["", ...this.prefix, "state"].join("/"), this.changeStateMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                // Save entity
                const validation = await this.service.changeState(req.body as TEntity, ...this.extractSecondaryRequestData(req));

                // Resolve validation
                res.json(validation);
            }
            catch (e) {
                // Handle route exception
                const validation = await this.handleRouteException(e);

                // Resolve validation
                res.json(validation);
            }
        });
    }

    /**
     * Middleware
     */
    protected middleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        // Return middleware handler
        return (req: Request, res: Response, next: NextFunction): Response | void => {
            // Go to next middleware
            return next();
        }
    }

    /**
     * Save middleware
     */
    protected saveMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Get middleware
     */
    protected getMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Single middleware
     */
    protected singleMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Get list middleware
     */
    protected getListMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Remove middleware
     */
    protected removeMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Change state middleware
     */
    protected changeStateMiddleware(): (req: Request, res: Response, next: NextFunction) => Promise<Response | void> | Response | void {
        return this.middleware();
    }

    /**
     * Extract request data
     * @param req 
     */
    protected extractSecondaryRequestData(req: Request): any[] {
        return [];
    }

    /**
     * Handle route exception
     * @param e 
     */
    protected abstract handleRouteException(e: any): Promise<ValidationResult<TEntity, TMessage>>;

    /**
     * Ensure service definition
     */
    private ensureServiceDefinition(): void {
        // Check that service exists
        if (!this.service) {
            throw new Error(`[Calf@Routes]: Service not defined for routes ${this.prefix.join("/")}`);
        };
    }
} 