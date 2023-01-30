"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCollectionModel = void 0;
const constants_1 = require("@app/common/constants");
const mongoose_1 = require("mongoose");
const CollectionModelSchemaObject = {
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
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
exports.PokemonCollectionModel = (0, mongoose_1.model)(constants_1.COLLECTION_NAMES.POKEMON, CollectionModelSchema);
//# sourceMappingURL=schema.js.map