"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = __importStar(require("http-status"));
const http_response_1 = require("@app/common/http-response");
const usecases_1 = require("@app/domain/league/usecases");
class PokemonController {
    constructor() {
        this.addRoute = async (req, res) => {
            const { trainer, title, location, terrain, pokemonMaxStats, requiredSlotSize } = req.body;
            try {
                const league = await new usecases_1.LeagueCreateUsecase()
                    .execute(trainer, {
                    title,
                    location,
                    terrain,
                    pokemonMaxStats,
                    requiredSlotSize
                });
                res.status(HttpStatus.CREATED).send((0, http_response_1.SuccessResponse)(league));
            }
            catch (error) {
                new http_response_1.HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
                    .track(http_response_1.ErrorCodes.CREATE_USER_DETAILS_FAILED)
                    .throw();
            }
        };
        this.viewDetailsRoute = async (req, res) => {
            const { leagueId } = req.params;
            try {
                const league = await new usecases_1.LeagueViewDetailsUsecase()
                    .getOne(leagueId);
                res.status(HttpStatus.OK).send((0, http_response_1.SuccessResponse)(league));
            }
            catch (error) {
                new http_response_1.HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
                    .track(http_response_1.ErrorCodes.CREATE_USER_DETAILS_FAILED)
                    .throw();
            }
        };
        this.listRoute = async (req, res) => {
            const { trainer = '' } = req.query;
            try {
                const list = await new usecases_1.LeagueListUsecase()
                    .getList({
                    trainer
                });
                res.status(HttpStatus.OK).send((0, http_response_1.SuccessResponse)(list));
            }
            catch (error) {
                new http_response_1.HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
                    .track(http_response_1.ErrorCodes.CREATE_USER_DETAILS_FAILED)
                    .throw();
            }
        };
    }
}
exports.default = PokemonController;
//# sourceMappingURL=league.controller.js.map