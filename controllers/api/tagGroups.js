/**
 * Created by Frank on 15/11/30.
 */
'use strict';
const service = require('../../services');

module.exports = function (router) {

    router.post('/:id/tags', function*() {
        this.body = yield service.tag.create(this.params.id, this.request.body);
    });

    return router;
};