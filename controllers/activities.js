/**
 * Created by Frank on 15/11/28.
 */
'use strict';
module.exports = function (router) {

    router.get('/', function *() {
        yield this.render('activities/activities');
    });

    router.get('/create', function *() {
        yield this.render('activities/post-activity');
    });

    router.get('/:activity', function *() {
        yield this.render('activities/activities-info');
    });

    return router;
};