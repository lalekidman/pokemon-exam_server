"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueListUsecase = void 0;
const makeLeagueListUsecase = ({ repositoryGateway }) => {
    return class LeagueListUsecase {
        constructor() { }
        /**
         *
         * @param options
         * @returns
         */
        async getList(options) {
            const { trainer = '' } = options || {};
            const league = await repositoryGateway.list(Object.assign({}, (trainer ? { owner: trainer } : {})));
            return league;
        }
    };
};
exports.makeLeagueListUsecase = makeLeagueListUsecase;
//# sourceMappingURL=list.js.map