/**
 * Created by Frank on 15/12/1.
 */
'use strict';

module.exports = {

    requireLogin: function*(next) {
        if (this.state.user) {
            return yield next;
        }
        this.redirect('/login');
    }
};