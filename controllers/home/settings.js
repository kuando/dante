/**
 * Created by Frank on 15/11/28.
 * 个人设置
 */

'use strict';
module.exports = function (router) {

    router.get('/profile', function* () {
        this.body = '个人信息设置';
    });

    router.get('/password', function* () {
        this.body = '密码设置';

    });
    router.get('/bind', function *() {
        this.body = '第三方绑定';
    });

    return router;
};