/**
 * Created by Frank on 15/11/22.
 */

'use strict';
const service = require('../../services');
module.exports = function (router) {

    router.get('/', function *() {
        this.body = yield service.user.findAll();
    });

    router.post('/', function *() {
        try {
            this.body = yield service.auth.register(this.request.body);
        } catch (err) {
            this.throw(400, err);
        }
    });

    return router;
};