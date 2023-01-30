"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    /**
     * connect to the repository/database
     */
    connect() {
        const databaseConnectionString = (process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST_URI : `${process.env.DB_PREFIX}://${process.env.DB_HOST}/${process.env.DB_NAME}`);
        return mongoose_1.default
            .connect(databaseConnectionString, {
            useNewUrlParser: true,
        })
            .then(() => {
            console.log('Successfully connected to database.');
            return true;
        })
            .catch(err => {
            console.log('Failed to connect to the database. Error: ', err);
            throw err;
        });
    }
    /**
     * connect to the repository/database
     */
    close() {
        return mongoose_1.default.disconnect();
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map