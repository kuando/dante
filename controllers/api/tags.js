/**
 * Created by Frank on 15/11/30.
 */
'use strict';
const service = require('../../services');

module.exports = function (router) {

    router.post('/', function*() {
        this.body = yield service.tag.create(this.request.body);
    });

    router.get('/', function*() {
        this.body = yield service.tag.findAll();
    });

    router.delete('/:id', function*() {
        this.body = yield service.tag.deleteById(this.params.id);
    });

    return router;
};