"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRoute = void 0;
const express_1 = require("express");
const trainer_controller_1 = __importDefault(require("@app/controllers/trainer.controller"));
const pokemon_controller_1 = __importDefault(require("@app/controllers/pokemon.controller"));
const trainer_middleware_validator_1 = require("./middlewares/trainer.middleware-validator");
const helper_1 = require("@app/common/helper");
class TrainerRoute {
    /**
     * expose the routes
     */
    expose() {
        const appRoute = (0, express_1.Router)({
            mergeParams: true
        });
        const appController = new trainer_controller_1.default();
        const pokemonController = new pokemon_controller_1.default();
        appRoute.post('/', trainer_middleware_validator_1.TrainerValidation.formValidationPipeline, helper_1.formValidatorMiddleware, appController.addRoute);
        appRoute.get('/', appController.listRoute);
        appRoute.get('/', appController.listRoute);
        appRoute.get('/:trainerId/pokemons', pokemonController.listRoute);
        return appRoute;
    }
}
exports.TrainerRoute = TrainerRoute;
//# sourceMappingURL=trainer.js.map