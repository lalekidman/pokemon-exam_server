"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueRoute = void 0;
const express_1 = require("express");
const league_controller_1 = __importDefault(require("@app/controllers/league.controller"));
const league_slot_1 = require("./league-slot");
class LeagueRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new league_controller_1.default();
        appRoute.use("/:leagueId/slot", new league_slot_1.LeagueSlotRoute().expose());
        appRoute.post('/', appController.addRoute);
        appRoute.patch('/:id', appController.updateRoute);
        appRoute.get('/', appController.listRoute);
        appRoute.get('/:id', appController.viewDetailsRoute);
        return appRoute;
    }
}
exports.LeagueRoute = LeagueRoute;
//# sourceMappingURL=league.js.map