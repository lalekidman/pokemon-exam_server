"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRoute = void 0;
const express_1 = require("express");
const league_slot_controller_1 = __importDefault(require("@app/controllers/league-slot.controller"));
class TrainerRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new league_slot_controller_1.default();
        appRoute.post('/', appController.addRoute);
        return appRoute;
    }
}
exports.TrainerRoute = TrainerRoute;
//# sourceMappingURL=league-slot.js.map