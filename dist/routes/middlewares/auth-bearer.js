"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTAuthBearer = void 0;
const passport_1 = __importDefault(require("passport"));
const http_status_1 = __importDefault(require("http-status"));
const http_response_1 = require("@app/common/http-response");
const JWTAuthBearerHandler = (req, res, next) => () => (error, data, errCode) => {
    if (errCode) {
        new http_response_1.HttpErrorResponse(res, http_status_1.default.UNAUTHORIZED)
            .track(http_response_1.ErrorCodes.INVALID_ACCESS_TOKEN_FORMAT)
            .throw();
        return;
    }
    else if (error) {
        new http_response_1.HttpErrorResponse(res, http_status_1.default.UNAUTHORIZED)
            .track(http_response_1.ErrorCodes.ACCESS_TOKEN_EXPIRED)
            .throw();
        return;
    }
    else {
        req.user = data;
        next();
    }
};
const JWTAuthBearer = () => {
    return (req, res, next) => {
        return passport_1.default.authenticate([
            'jwt'
        ], { session: false }, JWTAuthBearerHandler(req, res, next))(req, res, next);
    };
};
exports.JWTAuthBearer = JWTAuthBearer;
//# sourceMappingURL=auth-bearer.js.map