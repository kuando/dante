/**
 * Created by Frank on 15/11/23.
 */
'use strict';

module.exports = function (router) {

    router.get('/', function*() {
        yield this.render('index');
    });

    router.get('/discovery', function*() {
        yield this.render('discovery');
    });

    router.get('/login', function*() {
        yield this.render('login', this.flash || {});
    });

    router.post('/login', function*(next) {
        var ctx = this;
        yield passport.authenticate('local', {session: false},
            function*(err, user, info) {
                if (err) throw err;
                if (user === false) {
                    ctx.flash = info;
                    ctx.redirect('/auth/login');
                } else {
                    ctx.cookies.set('jwt', user.accessToken(), {signed: true});
                    ctx.redirect('/');
                }
            }).call(this, next);
    });

    router.get('/logout', function*() {
        this.cookies.set('jwt', null);
        this.redirect('/');
    });

    router.get('/register', function*() {
        yield this.render('register', this.flash || {});
    });

    router.post('/register', function*() {
        let user = this.request.body;
        try {
            yield userService.create(user);
            this.redirect('/auth/login');
        } catch (err) {
            this.flash = {user: user, message: err.message};
            this.redirect('/auth/register');
        }
    });

    return router;

};

