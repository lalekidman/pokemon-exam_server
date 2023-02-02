"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSlotRoute = void 0;
const express_1 = require("express");
const league_slot_controller_1 = __importDefault(require("@app/controllers/league-slot.controller"));
const league_slot_middleware_validator_1 = require("./middlewares/league-slot.middleware-validator");
const helper_1 = require("@app/common/helper");
class LeagueSlotRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new league_slot_controller_1.default();
        appRoute.post('/', league_slot_middleware_validator_1.LeagueSlotValidation.formValidationPipeline, helper_1.formValidatorMiddleware, appController.addRoute);
        appRoute.get('/', appController.listRoute);
        return appRoute;
    }
}
exports.LeagueSlotRoute = LeagueSlotRoute;
//# sourceMappingURL=league-slot.js.map