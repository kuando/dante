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
    });

    router.get('/user-home', function*() {
        yield this.render('user-home');
    });

    router.get('/publish', function*() {
        yield this.render('publish');
    });

};