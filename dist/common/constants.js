"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTION_NAMES = exports.SUSPEND_QUEUE_INPUT = exports.GOOGLE_FIREBASE_DYNAMIC_LINK_API_KEY = exports.QUEUE_SERVICE_HOST = exports.BRANCH_SERVICE_HOST = exports.BUSINESS_PORTAL_DOMAIN = exports.BACKEND_DOMAIN = void 0;
exports.BACKEND_DOMAIN = process.env.BACKEND_DOMAIN || '';
exports.BUSINESS_PORTAL_DOMAIN = process.env.BUSINESS_PORTAL_DOMAIN || '';
exports.BRANCH_SERVICE_HOST = process.env.BRANCH_SERVICE_HOST || '';
exports.QUEUE_SERVICE_HOST = process.env.QUEUE_SERVICE_HOST || '';
exports.GOOGLE_FIREBASE_DYNAMIC_LINK_API_KEY = process.env.GOOGLE_FIREBASE_KEY || '';
exports.SUSPEND_QUEUE_INPUT = {
    PARTNER: 0,
    BRANCH: 1,
    CUSTOMER: 2
};
exports.COLLECTION_NAMES = {
    TRAINER: 'trainer',
    POKEMON: 'pokemon',
    POKEMON_STATS: 'pokemon-stats',
};
//# sourceMappingURL=constants.js.map