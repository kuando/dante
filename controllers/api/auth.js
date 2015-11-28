/**
 * Created by Frank on 15/11/26.
 */
'use strict';

const passport = require('koa-passport');

module.exports = function (router) {
    router.post('/login', function*(next) {
        var ctx = this;
        yield passport.authenticate('local', function*(err, user, info) {
            if (err) throw err;
            if (user === false) {
                ctx.status = 401;
                ctx.body = {message: '用户名或密码不对'};
            } else {
                ctx.body = user.accessToken();
            }
        }).call(this, next)
    });
};