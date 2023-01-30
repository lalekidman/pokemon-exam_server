"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRoute = void 0;
const express_1 = require("express");
const pokemon_controller_1 = __importDefault(require("@app/controllers/pokemon.controller"));
class PokemonRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new pokemon_controller_1.default();
        appRoute.post('/', appController.addRoute);
        return appRoute;
    }
}
exports.PokemonRoute = PokemonRoute;
//# sourceMappingURL=pokemon.js.map