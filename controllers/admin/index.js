/**
 * Created by Frank on 15/12/2.
 */
'use strict';
const services = require('../../services');

module.exports = function (router) {

    router.get('/', function*() {
        let themes = yield services.activities.findAllActivityTypes();
        this.state.message = this.flash && this.flash.message;
        yield this.render('admin/activityTheme', {themes: themes});
    });

    router.post('/themes', function*() {
        try {
            yield services.activities.createActivityType(this.request.body);
            this.flash = {message: "创建成功"};
        } catch (err) {
            this.flash = {message: err.message};
        }
        this.redirect('/admin');
    });

    return router;
};