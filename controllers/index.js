/**
 * Created by Frank on 15/11/23.
 */
'use strict';

module.exports = function (router) {

    router.get('/', function*() {

        yield this.render('home');
    });

    router.get('/discovery', function*() {
        yield this.render('discovery');
    });

    router.get('/post-activity', function*() {
        yield this.render('post-activity');
    })

};