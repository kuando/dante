/**
 * Created by Frank on 15/11/23.
 */
'use strict';
const _ = require('lodash');
const config = require('../config');
module.exports.register = function (hbs) {
    hbs.registerHelper('content', function (name, options) {
        let hash = options.hash || {};
        let mode = hash.mode || 'append';
        let block = hbs.blocks[name] || (hbs.blocks[name] = []);
        let content = options.fn(hbs);
        if (mode === 'prepend') {
            hbs.blocks[name] = [content, ...block];
        } else if (mode === 'replace') {
            hbs.blocks[name] = [content];
        } else {
            hbs.blocks[name] = [...block, content];
        }
    });

    hbs.registerHelper('path', function (name) {
        return config.qiniu.visitUrl + name
    });



};