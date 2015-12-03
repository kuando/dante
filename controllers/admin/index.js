/**
 * Created by Frank on 15/12/2.
 */
'use strict';
const services = require('../../services');

module.exports = function (router) {

    router.get('/', function*() {
        yield this.render('admin/activityTheme');
    });

    router.post('/themes', function*() {
        try {
            yield services.activities.createActivityType(this.request.body);
        } catch (err) {
            this.state.err = err.message
        }

    });

    return router;
};