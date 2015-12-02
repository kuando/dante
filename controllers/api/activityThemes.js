/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const service = require('../../services');
const activityService = service.activities;
module.exports = function (router) {

    router.get('/', function *() {
        this.body = yield activityService.findAllActivityTypes(this.query);
    });

    router.post('/', function*() {
        this.body = yield activityService.createActivityType(this.request.body);
    });

    router.get('/:id', function *() {
        this.body = yield activityService.findActivityTypeById(this.params.id);
    });


    return router;
};