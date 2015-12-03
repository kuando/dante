/**
 * Created by Frank on 15/11/28.
 */
'use strict';
const service = require('../services');
const auth = require('../middleware/auth');
const activityService = service.activities;
module.exports = function (router) {

    router.get('/', function *() {
        let themes = yield service.activities.findAllActivityTypes();
        yield this.render('activities/themes', {themes: themes});
    });

    router.get('/create', auth.requireLogin, function *() {
        let theme = yield activityService.findActivityTypeById(this.query.theme);
        if (!theme || theme === null) {
            return this.redirect('/activities');
        }
        let template = theme.template;
        this.state.activity = yield activityService.createEmptyActivity(this.state.user, theme.id);
        yield this.render(`activities/${template}-activity`);
    });

    router.get('/:id', function *() {
        yield this.render('activities/activity-detail');
    });

    return router;
};