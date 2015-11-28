/**
 * Created by Frank on 15/11/27.
 */
'use strict';
const jwt = require('jsonwebtoken');

module.exports = function (opts) {
    return function *(next) {
        let token = this.cookies.get('jwt');
        if (token && token !== null) {
            try {
                this.state.user = jwt.verify(token, 'secret');
            } catch (err) {
                this.state.user = null;
            }
        }
        yield next;
    };
};