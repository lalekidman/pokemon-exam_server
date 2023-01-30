"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
class ShortURL {
    constructor(domain) {
        this.generate = (url, data) => {
            const { metaTags } = data;
            return (0, axios_1.default)({
                url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${constants_1.GOOGLE_FIREBASE_DYNAMIC_LINK_API_KEY}`,
                method: 'POST',
                // "Content-Type": 'application/json',
                data: {
                    dynamicLinkInfo: Object.assign({
                        domainUriPrefix: "https://kyoo.page.link",
                        link: this.DOMAIN.concat(url),
                        androidInfo: {
                            androidPackageName: "com.leisue.kyoo_customer.activity.splash.SplashActivity"
                        },
                        iosInfo: {
                            iosBundleId: "com.leisue.kyoo-customer-app-ios",
                            iosIpadBundleId: "com.leisue.kyoo-customer-app-ios"
                        }
                    }, metaTags ? {
                        socialMetaTagInfo: {
                            socialTitle: metaTags.title,
                            socialDescription: metaTags.desc,
                            socialImageLink: metaTags.imageURL
                        }
                    } : {})
                }
            })
                .then((response) => {
                const { shortLink: url, error } = response.data;
                return (url);
            });
        };
        this.DOMAIN = domain;
    }
}
exports.default = ShortURL;
//# sourceMappingURL=service.js.map