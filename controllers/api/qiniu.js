/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const qiniu = require('../../middleware/qiniu');
module.exports = function (router) {
    router.get('/token', qiniu(), function*() {
        this.body = this.state.token;
    });
    return router;
};