"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoute = void 0;
const express_1 = require("express");
const trainer_1 = require("./trainer");
class AppRoute {
    constructor() {
    }
    /**
     * public routes are the routes that can be access even the user is not authenticated.
     */
    publicRoutes() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        appRoute.use("/users", new trainer_1.TrainerRoute().expose());
        return appRoute;
    }
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        // appRoute.use("/", this.privateRoutes())
        appRoute.use("/api", this.publicRoutes());
        return appRoute;
    }
}
exports.AppRoute = AppRoute;
//# sourceMappingURL=index.js.map