"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
exports.default = () => {
    let JWTBearerAuthOption = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.ACCOUNT_SERVICE_ACCESS_KEY_SECRET_ID,
        passReqToCallback: true
    };
    passport_1.default.use(new passport_jwt_1.Strategy(JWTBearerAuthOption, (req, payload, done) => {
        let platform = '';
        //  const hasOriginalUri = req.headers['x-original-uri'];
        //  if (!req.headers.client && hasOriginalUri) {
        //    platform = hasOriginalUri.split('/')[3];
        //  }
        //  const accessToken = authorization.split(' ')[1];
        const { hash = '' } = req.fingerprint ? req.fingerprint : {};
        const authOption = { fingerprint: hash, platform };
        done(null, {
        // some data that needed to be in "req.user"
        });
    }));
};
//# sourceMappingURL=passport.js.map