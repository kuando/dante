/**
 * Created by Frank on 15/11/28.
 * 个人设置
 */

'use strict';
module.exports = function (router) {

    router.get('/profile', function* () {
        yield this.render('dashboard/profile');
    });

    router.get('/password', function* () {
        yield this.render('dashboard/password');
    });
    router.get('/bind', function *() {
        yield this.render('dashboard/bind');
    });

    return router;
};