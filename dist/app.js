"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("@app/configs/repository/mysql");
const routes_1 = require("@app/routes");
class App {
    constructor() {
        this.port = 3000;
        this.app = (0, express_1.default)();
        if (process.env.PORT) {
            this.port = +process.env.PORT;
        }
        this.loadMiddlewares();
        // new Database().connect()
        // expose the main route here.
        this.app.use(new routes_1.AppRoute().expose());
    }
    /**
     * expose the server port.
     */
    listen(port = this.port) {
        this.app.listen(port, () => {
            console.log(`Listening to port ${port}`);
        });
    }
    /**
     * load middlewares
     */
    loadMiddlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map