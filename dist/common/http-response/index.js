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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = exports.ErrorResponse = exports.HttpErrorResponse = exports.ErrorCodes = void 0;
__exportStar(require("./error-codes"), exports);
exports.ErrorCodes = __importStar(require("./error-codes"));
class HttpErrorResponse {
    constructor(response, status) {
        this.response = response;
        this.status = status;
        this.errors = [];
    }
    /**
     * track the errors
     * @param data
     * @returns
     */
    track(data) {
        this.errors.push(data);
        return this;
    }
    /**
     * throw or return the error.
     */
    throw() {
        this.response
            .status(this.status)
            .send((0, exports.ErrorResponse)(this.errors));
    }
}
exports.HttpErrorResponse = HttpErrorResponse;
const ErrorResponse = (errors) => {
    // check if the error is have a statusCode.
    // ##DEVNOTE: it means the err is AppError
    return {
        success: false,
        data: null,
        errors
    };
};
exports.ErrorResponse = ErrorResponse;
const SuccessResponse = (data) => {
    // check if the error is have a statusCode.
    // ##DEVNOTE: it means the err is AppError
    return {
        success: true,
        data,
        errors: []
    };
};
exports.SuccessResponse = SuccessResponse;
//# sourceMappingURL=index.js.map