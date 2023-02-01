"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueListUsecase = exports.LeagueViewDetailsUsecase = exports.LeagueValidateUsecase = exports.LeagueUpdateUsecase = exports.LeagueCreateUsecase = void 0;
const league_1 = require("@app/persistent/repository/mysql/entity/league");
const create_1 = require("./create");
const update_1 = require("./update");
const validation_1 = require("./validation");
const view_details_1 = require("./view-details");
const list_1 = require("./list");
const repositoryGateway = new league_1.LeagueRepositoryGateway();
exports.LeagueCreateUsecase = (0, create_1.makeLeagueCreateUsecase)({
    repositoryGateway
});
exports.LeagueUpdateUsecase = (0, update_1.makeLeagueUpdateUsecase)({
    repositoryGateway
});
exports.LeagueValidateUsecase = (0, validation_1.makeLeagueValidateUsecase)({
    repositoryGateway,
});
exports.LeagueViewDetailsUsecase = (0, view_details_1.makeLeagueViewDetailsUsecase)({
    repositoryGateway,
});
exports.LeagueListUsecase = (0, list_1.makeLeagueListUsecase)({
    repositoryGateway,
});
// league slot id.
// then
//# sourceMappingURL=index.js.map