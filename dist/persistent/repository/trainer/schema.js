"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerCollectionModel = void 0;
const constants_1 = require("@app/common/constants");
const mongoose_1 = require("mongoose");
const CollectionModelSchemaObject = {
    _id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    suspended: {
        type: Boolean,
        default: false
    },
    suspendedAt: {
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
exports.TrainerCollectionModel = (0, mongoose_1.model)(constants_1.COLLECTION_NAMES.TRAINER, CollectionModelSchema);
//# sourceMappingURL=schema.js.map