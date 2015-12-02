/**
 * Created by Frank on 15/11/28.
 */
'use strict';
const service = require('../services');
const auth = require('../middleware/auth');
const activityService = service.activities;
module.exports = function (router) {

    router.get('/', function *() {
        this.body = '选择活动类型';
    });

    router.get('/create', auth.requireLogin, function *() {
        let activityType = yield activityService.findActivityTypeById(this.query.activityType);
        if (!activityType || activityType === null) {
            return this.redirect('/activities');
        }
        let theme = activityType.theme;
        this.state.activity = yield activityService.createEmptyActivity(this.state.user, activityType);
        yield this.render(`activities/${theme}-activity`);
    });


    router.get('/:activity', function *() {
        this.body = '活动详细页面';
    });


    return router;
};