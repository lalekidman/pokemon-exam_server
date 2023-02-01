"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoute = void 0;
const express_1 = require("express");
const trainer_1 = require("./trainer");
const pokemon_1 = require("./pokemon");
const league_1 = require("./league");
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
        appRoute.use("/trainers", new trainer_1.TrainerRoute().expose());
        appRoute.use("/pokemons", new pokemon_1.PokemonRoute().expose());
        // appRoute.use("/leagues/:id/slot", new LeagueSlotRoute().expose())
        appRoute.use("/leagues", new league_1.LeagueRoute().expose());
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