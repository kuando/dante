/**
 * Created by Frank on 15/11/23.
 */
'use strict';
const _ = require('lodash');
module.exports.register = function (hbs) {
    hbs.registerHelper('content', function (name, options) {
        // fetch block
        let hash = options.hash || {};
        let mode = hash.mode || 'append';
        let block = hbs.blocks[name] || (hbs.blocks[name] = []);
        // render block and save for layout render
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
        return "http://7xlmrh.com1.z0.glb.clouddn.com/" + name
    });

};