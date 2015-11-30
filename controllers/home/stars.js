/**
 * Created by Frank on 15/11/28.
 *
 * 个人收藏
 *
 */
'use strict';
module.exports = function (router) {
    router.get('/', function*() {
        yield this.render('dashboard/stars');
    });
    return router;
};