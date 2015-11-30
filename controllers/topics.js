/**
 *
 * Created by Frank on 15/11/28.
 * 活动专题页面
 *
 */

'use strict';
module.exports = function (router) {

    router.get('/', function *() {
        yield this.render('topics');
    });

    router.get('/:topic', function*() {
        this.body = '专题详情';
    });

    return router;
};