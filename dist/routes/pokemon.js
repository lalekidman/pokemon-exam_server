"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRoute = void 0;
const express_1 = require("express");
const pokemon_controller_1 = __importDefault(require("@app/controllers/pokemon.controller"));
const pokemon_middleware_validator_1 = require("./middlewares/pokemon.middleware-validator");
const helper_1 = require("@app/common/helper");
class PokemonRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new pokemon_controller_1.default();
        appRoute.post('/', pokemon_middleware_validator_1.PokemonValidation.formValidationPipeline, helper_1.formValidatorMiddleware, appController.addRoute);
        appRoute.get('/', appController.listRoute);
        appRoute.get('/:id', appController.viewDetailsRoute);
        return appRoute;
    }
}
exports.PokemonRoute = PokemonRoute;
//# sourceMappingURL=pokemon.js.map