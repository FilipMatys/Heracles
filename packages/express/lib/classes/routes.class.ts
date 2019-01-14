// External modules
import { Router, NextFunction, Request, Response } from "express";
import { EntityService, ValidationResult } from "@calf/common";
import { IQuery } from "@calf/serializable";

/**
 * Routes
 */
export abstract class Routes<TEntity, TMessage> {

    // Router
    protected router: Router;

    // Prefix
    protected prefix: string[];

    // Service
    protected abstract service: EntityService<TEntity, TMessage>;

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
     * Create GetList route
     */
    public createGetListRoute(): void {
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
        // Remove route
        this.router.post(["", ...this.prefix, "remove"].join("/"), this.saveMiddleware(), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
     * Middleware
     */
    protected middleware(): (req: Request, res: Response, next: NextFunction) => Response | void {
        // Return middleware handler
        return (req: Request, res: Response, next: NextFunction): Response | void => {
            // Go to next middleware
            return next();
        }
    }

    /**
     * Save middleware
     */
    protected saveMiddleware(): (req: Request, res: Response, next: NextFunction) => Response | void {
        return this.middleware();
    }

    /**
     * Get middleware
     */
    protected getMiddleware(): (req: Request, res: Response, next: NextFunction) => Response | void {
        return this.middleware();
    }

    /**
     * Get list middleware
     */
    protected getListMiddleware(): (req: Request, res: Response, next: NextFunction) => Response | void {
        return this.middleware();
    }

    /**
     * Remove middleware
     */
    protected removeMiddleware(): (req: Request, res: Response, next: NextFunction) => Response | void {
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
} 