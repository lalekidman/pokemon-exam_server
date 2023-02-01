"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueViewDetailsUsecase = void 0;
const makeLeagueViewDetailsUsecase = ({ repositoryGateway }) => {
    return class LeagueViewDetailsUsecase {
        constructor() { }
        /**
         * get league object
         * @param id
         * @returns
         */
        async getOne(id) {
            const league = await repositoryGateway.findOne({
                id
            });
            return league;
        }
        /**
         * get league object
         * throw error if no data found.
         * @param id
         * @returns
         */
        async getOneStrict(id) {
            const league = await this.getOne(id);
            if (!league) {
                throw new Error("No league data found.");
            }
            return league;
        }
    };
};
exports.makeLeagueViewDetailsUsecase = makeLeagueViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map