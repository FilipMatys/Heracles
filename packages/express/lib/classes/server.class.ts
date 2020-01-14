// External modules
import * as express from "express";

/**
 * The server
 */
export class Server {

    // Application
    public app: express.Application;

    /**
	 * Bootstrap the application.
	 *
	 * @class Server
	 * @method bootstrap
	 * @static
	 * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
	 */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor
     */
    constructor() {
        // Create application
        this.app = express();

        // Initialize
        this.initialize();
    }

    /**
     * Initialize application
     */
    public async initialize(): Promise<void> {
        // Configure 
        await this.configure();

        // Initialize modules
        await this.modules();
    }

    /**
     * Configure server
     */
    private async configure(): Promise<void> {}

    /**
     * Initialize modules
     */
    private async modules(): Promise<void> {}
}   