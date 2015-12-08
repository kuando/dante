/**
 * Created by Frank on 15/11/28.
 * 个人设置
 */

'use strict';
module.exports = function (router) {

    router.get('/profile', function* () {
        yield this.render('home/settings/profile');
    });


    router.get('/password', function* () {
        yield this.render('home/settings/password');
    });

    router.get('/bind', function *() {
        yield this.render('home/settings/bind');
    });

    return router;
};