"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStatsCollectionModel = void 0;
const constants_1 = require("@app/common/constants");
const mongoose_1 = require("mongoose");
const CollectionModelSchemaObject = {
    _id: {
        type: String,
        required: true,
    },
    attack: {
        type: Number,
        required: true,
    },
    defense: {
        type: Number,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Number,
        defaul: 0
    },
    updatedAt: {
        type: Number,
        defaul: 0
    }
};
const CollectionModelSchema = new mongoose_1.Schema(CollectionModelSchemaObject, {
    timestamps: {
        currentTime: Date.now
    }
});
exports.PokemonStatsCollectionModel = (0, mongoose_1.model)(constants_1.COLLECTION_NAMES.POKEMON_STATS, CollectionModelSchema);
//# sourceMappingURL=schema.js.map