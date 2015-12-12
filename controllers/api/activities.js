/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const services = require('../../services');
const activityService = services.activities;


module.exports = function (router) {

    router.put('/:id/addEnroll', function*() {
        this.body = yield activityService.addEnroll(this.params.id, this.request.body.extras);
    });

    router.del('/:id/deleteEnroll', function*() {
        this.body = yield activityService.deleteEnroll(this.params.id);
    });

    router.put('/:id/addVote', function*() {
        this.body = yield activityService.addVote(this.params.id, this.request.body);
    });

    router.del('/:id/deleteVote', function*() {
        this.body = yield activityService.deleteVote(this.params.id);
    });

    return router;
};