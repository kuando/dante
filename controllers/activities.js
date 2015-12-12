/**
 * Created by Frank on 15/11/28.
 */
'use strict';
const service = require('../services');
const auth = require('../middleware/auth');
const activityService = service.activities;
module.exports = function (router) {

    router.get('/', function *() {
        let themes = yield activityService.findAllActivityTypes();
        yield this.render('activities/themes', {themes: themes});
    });

    router.get('/:template/create', auth.requireLogin, function *() {
        let theme = yield activityService.findActivityTypeById(this.query.theme);
        if (!theme) {
            return this.redirect('/activities');
        }
        let activity = yield activityService.createEmptyActivity(this.state.user, theme);
        this.state.activity = {id: activity.id};
        yield this.render(`activities/${theme.template}-activity`);
    });

    router.post('/:id/publish', auth.requireLogin, function *() {
        let activity = yield activityService.publishActivity(this.params.id, this.request.body);
        console.log(activity);
    });


    router.get('/:id', function *() {
        yield this.render('activities/activity-detail');
    });


    return router;
};