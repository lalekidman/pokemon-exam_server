"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStatsEntity = void 0;
const uuid_1 = require("uuid");
const entity_1 = require("./entity");
exports.PokemonStatsEntity = (0, entity_1.makePokemonStatsEntity)({
    // could use another library.
    generateId: uuid_1.v4
});
__exportStar(require("./interfaces"), exports);
//# sourceMappingURL=index.js.map