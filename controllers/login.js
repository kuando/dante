/**
 * Created by Frank on 15/11/23.
 */
module.exports = function (router) {
    router.get('/', function*() {
        yield this.render('login');
    });

};