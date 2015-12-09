/**
 * Created by Frank on 15/12/1.
 */
'use strict';

module.exports = function (router) {

    router.put('/:id/preview', function*() {
        console.log(this.request.body);
    })
};