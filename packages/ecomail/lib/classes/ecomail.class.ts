// Interfaces
import { IEcomailConfig } from "../interfaces/config.interface";

// Services
import { ListsService } from "../services/lists.service";

/**
 * Ecomail
 * @description 
 */
export class Ecomail {

    /**
     * Lists
     * @description Access list entities
     */
    public static get Lists(): ListsService {

        // Return lists service
        return this.listsService;
    }

    // Price list service instance
    private static listsService: ListsService;

    /**
     * Disable constructor
     */
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IEcomailConfig): void {
        // Create services
        this.listsService = new ListsService(config);
    }
}