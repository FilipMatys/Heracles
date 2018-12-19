// External modules
import { Router } from "express";

/**
 * Module
 */
export abstract class Module {

    /**
     * Initialize module
     * @param router 
     * @param args
     */
    public abstract init(router: Router, ...args: any[]): Promise<void>;
}