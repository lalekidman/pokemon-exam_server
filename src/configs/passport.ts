/**
 * @libraries
 */
 import { Request } from 'express'
 import passport, {} from 'passport'
 import {Strategy as JWTStrategy, ExtractJwt, VerifiedCallback} from 'passport-jwt'
 
 
 export default () => {
   let JWTBearerAuthOption = {
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: process.env.ACCOUNT_SERVICE_ACCESS_KEY_SECRET_ID,
     passReqToCallback: true
   };
   
   passport.use(new JWTStrategy(JWTBearerAuthOption, (req: Request, payload: any, done: VerifiedCallback) => {

     let platform = ''
    //  const hasOriginalUri = req.headers['x-original-uri'];
    //  if (!req.headers.client && hasOriginalUri) {
    //    platform = hasOriginalUri.split('/')[3];
    //  }
    //  const accessToken = authorization.split(' ')[1];
     const { hash = '' } = req.fingerprint ? req.fingerprint : {};
     const authOption = {fingerprint: hash, platform}
     done(null, {
      // some data that needed to be in "req.user"
     })
   }))
 }