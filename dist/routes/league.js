"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueRoute = void 0;
const express_1 = require("express");
const league_controller_1 = __importDefault(require("@app/controllers/league.controller"));
const league_slot_1 = require("./league-slot");
const league_middleware_validator_1 = require("./middlewares/league.middleware-validator");
const helper_1 = require("@app/common/helper");
class LeagueRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new league_controller_1.default();
        appRoute.use("/:leagueId/slots", new league_slot_1.LeagueSlotRoute().expose());
        appRoute.post('/', league_middleware_validator_1.LeagueValidation.formValidationPipeline, helper_1.formValidatorMiddleware, appController.addRoute);
        appRoute.patch('/:leagueId', league_middleware_validator_1.LeagueValidation.formValidationPipeline, helper_1.formValidatorMiddleware, appController.updateRoute);
        appRoute.get('/', appController.listRoute);
        appRoute.get('/:leagueId', appController.viewDetailsRoute);
        return appRoute;
    }
}
exports.LeagueRoute = LeagueRoute;
//# sourceMappingURL=league.js.map