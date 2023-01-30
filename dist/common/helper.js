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
exports.generateQueryString = exports.requestParamsValidatorMiddleware = exports.formValidatorMiddleware = exports.generateSearchFields = exports.ValidateEmail = exports.ValidateMobileNo = void 0;
const express_validator_1 = require("express-validator");
const HttpStatus = __importStar(require("http-status"));
const regex_pattern_1 = require("./regex-pattern");
const ValidateMobileNo = (contactNo) => {
    const newN = contactNo.toString().replace(/ /g, '').replace(/-/g, '');
    const patt = /^(\+639|09|9)\d{9}$/g;
    const txt = newN.toString().match(patt);
    return txt ? txt[0] : null;
};
exports.ValidateMobileNo = ValidateMobileNo;
const ValidateEmail = (email) => {
    const pattern = /^\S+@\S+$/;
    return pattern.test(email);
};
exports.ValidateEmail = ValidateEmail;
/**
 *
 * @param searchFields array of fieldName that needed to be search, eg: name, email
 * @param searchText value that needed to be search
 */
const generateSearchFields = (searchFields, searchText) => (searchFields.map((field) => ({ [field]: {
        $regex: new RegExp(searchText, 'gi')
    } })));
exports.generateSearchFields = generateSearchFields;
const formValidatorMiddleware = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (result.errors.length !== 0) {
        return res.status(HttpStatus.BAD_REQUEST)
            .json(result);
    }
    next();
};
exports.formValidatorMiddleware = formValidatorMiddleware;
/**
 * validate request params middleware
 * @param pipeline express validator pipeline such as query | body | params | cookie | header etc...
 * @param imageFileName fileName or array of fileName that needed to be check if image type
 */
const requestParamsValidatorMiddleware = (pipeline, imageFileName) => {
    return async (req, res, next) => {
        await Promise.all(pipeline.map(validation => validation.run(req)));
        const result = (0, express_validator_1.validationResult)(req);
        const validateUploadedImage = (uploadedImage) => {
            const _paramName = (typeof (uploadedImage) === 'string') ? uploadedImage : uploadedImage.fileName;
            const image = req.files[_paramName];
            const imageURL = req.body[_paramName];
            if (imageURL && (typeof imageURL === 'string' && regex_pattern_1.ImagesPattern.test(imageURL))) {
                // if imageURL is not empty and image format, skip the validation
                return true;
            }
            if (!(typeof (uploadedImage) === 'string') && (uploadedImage.isRequired && (image === null || image === void 0 ? void 0 : image.size) <= 0)) {
                result.errors.push({
                    value: image,
                    msg: `this field is required. ${_paramName}: ${(regex_pattern_1.ImagesPattern).toString()} `,
                    param: _paramName,
                    location: 'file'
                });
                return false;
            }
            if (image && image.size > 0) {
                if (!(image.type.match(regex_pattern_1.ImagesPattern))) {
                    result.errors.push({
                        value: image,
                        msg: `allow file type to upload. ${(regex_pattern_1.ImagesPattern).toString()}`,
                        param: _paramName,
                        location: 'file'
                    });
                }
            }
            return false;
        };
        if (imageFileName) {
            if (Array.isArray(imageFileName)) {
                for (const fieldname of imageFileName) {
                    validateUploadedImage(fieldname);
                }
            }
            else {
                validateUploadedImage(imageFileName);
            }
        }
        if (!(result.isEmpty())) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json(result);
        }
        next();
    };
};
exports.requestParamsValidatorMiddleware = requestParamsValidatorMiddleware;
/**
 * generate query string for internal request
 * @param queryString
 * @param queryData
 * @param fieldName optional, object properties or index of array
 */
const generateQueryString = (queryString, queryData, fieldName) => {
    const x = 0;
    for (const query in queryData) {
        const andSign = queryString ? '&' : '?';
        // check if fieldName is not empty, if not, add query inside of the '[]' eg: filterBy[value] = testValue
        const queryField = fieldName ? `${fieldName}[${query}]` : query;
        try {
            // console.log('queryData[query]: ', queryData[query])
            // check if the value is object
            if (typeof (queryData[query]) === 'object') {
                // recursion call
                queryString = (0, exports.generateQueryString)(queryString, queryData[query], query);
            }
            else {
                queryString = queryString.concat(andSign).concat(`${queryField}=${queryData[query]}`);
            }
        }
        catch (err) {
            queryString = queryString.concat(andSign).concat(`${queryField}=${queryData[query]}`);
        }
    }
    return queryString;
};
exports.generateQueryString = generateQueryString;
//# sourceMappingURL=helper.js.map