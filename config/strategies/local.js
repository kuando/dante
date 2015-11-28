/**
 * Created by Frank on 15/11/26.
 */
'use strict';

const LocalStrategy = require('passport-local').Strategy;
const userService = require('../../services').user;

module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'phone'
    }, function (phone, password, done) {
        userService.findByPhone(phone).then(user => {
            if (!user || !user.authenticate(password)) {
                return done(null, false, {message: '用户名或密码错误'});
            }
            done(null, user);
        }).catch(err=> {
            done(err);
        });
    }));
};