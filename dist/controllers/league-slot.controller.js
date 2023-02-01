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
const usecases_1 = require("@app/domain/league-slots/usecases");
const usecases_2 = require("@app/domain/league/usecases");
class AppController {
    constructor() {
        this.addRoute = async (req, res) => {
            const { type = '', participants = [] } = req.body;
            const { leagueId = '' } = req.params;
            try {
                // to validate if the league is existing.
                const league = await new usecases_2.LeagueViewDetailsUsecase().getOneStrict(leagueId);
                // slot create and then add the pokemons.
                const result = await new usecases_1.LeagueSlotCreateUsecase()
                    .execute(league, {
                    type,
                    participants
                });
                res.status(HttpStatus.CREATED).send((0, http_response_1.SuccessResponse)(result));
            }
            catch (error) {
                res.status(HttpStatus.BAD_REQUEST).send((0, http_response_1.ErrorResponse)([error.message]));
            }
        };
    }
}
exports.default = AppController;
//# sourceMappingURL=league-slot.controller.js.map