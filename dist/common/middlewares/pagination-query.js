"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformPaginationListMiddleware = void 0;
const transformPaginationListMiddleware = (req, res, next) => {
    const { fields = '', limit = 10, offset = 0, search = '', sort = '' } = req.query;
    res.locals.queryParams = Object.assign(Object.assign({}, req.query), { limit: +limit, offset: +offset, search,
        sort,
        fields });
    next();
};
exports.transformPaginationListMiddleware = transformPaginationListMiddleware;
//# sourceMappingURL=pagination-query.js.map