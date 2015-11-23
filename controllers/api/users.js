/**
 * Created by Frank on 15/11/22.
 */

'use strict';
module.exports = function (router) {
    router.get('/', function *(next) {
        this.body = 'Hello koa';
        yield next;
    });
    return router;
};