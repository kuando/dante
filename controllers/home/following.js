/**
 * Created by Frank on 15/11/28.
 * 关注的人
 */

'use strict';
module.exports = function (router) {

    router.get('/', function*() {
        this.body = '我关注的';
    });

    return router;

};