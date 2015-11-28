/**
 * Created by Frank on 15/11/26.
 */
'use strict';
const userService = require('../services').user;

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        done(null, {id: user.id});
    });

    passport.deserializeUser((user, done)=> {
        userService.findById(user.id).then(user => {
            if (!user) {
                return done(new Error('用户不存在'));
            }
            done(null, user);
        }).catch(err => {
            done(err);
        })
    });

    require('./strategies/local')(passport);

};
