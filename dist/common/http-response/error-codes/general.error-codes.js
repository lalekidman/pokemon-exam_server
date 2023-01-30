"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCESS_TOKEN_EXPIRED = exports.INVALID_ACCESS_TOKEN_FORMAT = exports.INVALID_MOBILE_NUMBER_FORMAT = exports.INVALID_EMAIL_FORMAT = void 0;
exports.INVALID_EMAIL_FORMAT = {
    code: 10001,
    error: 'INVALID_EMAIL_FORMAT',
    description: 'Invalid email format.',
    details: {}
};
exports.INVALID_MOBILE_NUMBER_FORMAT = {
    code: 10002,
    error: 'INVALID_MOBILE_NUMBER_FORMAT',
    description: 'Invalid mobile number format. format should be XXXXXXXXXXXX.',
    details: {}
};
exports.INVALID_ACCESS_TOKEN_FORMAT = {
    code: 10003,
    error: 'INVALID_ACCESS_TOKEN_FORMAT',
    description: 'the format of access token is invalid. please double check your access token.',
    details: {}
};
exports.ACCESS_TOKEN_EXPIRED = {
    code: 10004,
    error: 'ACCESS_TOKEN_EXPIRED',
    description: 'access token is expired',
    details: {}
};
//# sourceMappingURL=general.error-codes.js.map