"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumeric = exports.IsBoolean = exports.IsString = void 0;
const IsString = (options) => {
    const { maxLength = -1, minLength = -1, required = false } = options !== null && options !== void 0 ? options : {};
    return function (target, propertyKey, descriptor) {
        const setter = (declaredValue) => {
            if (!(typeof declaredValue === 'string')) {
                throw new Error(`"${propertyKey}" must be string. found ${typeof declaredValue}.`);
            }
            if (required && !declaredValue) {
                throw new Error(`"${propertyKey}" must is a required field.`);
            }
            if (maxLength >= 0 && declaredValue.length > maxLength) {
                throw new Error(`"${propertyKey}" exceed the maximum character limit which is ${maxLength}.`);
            }
            if (minLength >= 0 && declaredValue.length < minLength) {
                throw new Error(`"${propertyKey}" exceed the minimum character limit which is ${minLength}.`);
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: descriptor.get,
            enumerable: true,
            configurable: true,
            set: setter,
        });
    };
};
exports.IsString = IsString;
const IsBoolean = () => {
    return function (target, propertyKey, descriptor) {
        const setter = function (declaredValue) {
            if (!(typeof declaredValue === 'boolean')) {
                throw new Error(`"${propertyKey}" must be boolean. found ${typeof declaredValue}.`);
            }
        };
        Object.defineProperty(target, propertyKey, Object.assign(Object.assign({}, descriptor), { set: setter }));
    };
};
exports.IsBoolean = IsBoolean;
const IsNumeric = (options) => {
    const { min = -1, max = -1, required = false } = options !== null && options !== void 0 ? options : {};
    return function (target, propertyKey, descriptor) {
        const setter = function (declaredValue) {
            if (!(typeof declaredValue === 'number')) {
                throw new Error(`"${propertyKey}" must be number. found ${typeof declaredValue}.`);
            }
            if (max >= 0 && declaredValue < max) {
                throw new Error(`"${propertyKey}" must be less than ${max}.`);
            }
            if (min >= 0 && declaredValue < min) {
                throw new Error(`"${propertyKey}" must be greather than ${min}.`);
            }
        };
        Object.defineProperty(target, propertyKey, Object.assign(Object.assign({}, descriptor), { set: setter }));
    };
};
exports.IsNumeric = IsNumeric;
//# sourceMappingURL=index.js.map