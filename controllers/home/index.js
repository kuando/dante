/**
 * Created by Frank on 15/11/28.
 * 用户首页
 *
 */
'use strict';
module.exports = function (router) {

    router.get('/', function*() {

        yield this.render('dashboard/index');

    });

    return router;
};