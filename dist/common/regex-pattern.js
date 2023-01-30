"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesPattern = exports.PhilippinesMobileNumberPattern = exports.URLPattern = void 0;
exports.URLPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
exports.PhilippinesMobileNumberPattern = /^(\+639|09|9)\d{9}$/g;
exports.ImagesPattern = /(jpe?g|jpg|png|image\/png)$/gim;
//# sourceMappingURL=regex-pattern.js.map