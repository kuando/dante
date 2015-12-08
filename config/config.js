'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
module.exports = _.assign(
    require('./env/all'),
    require('./env/' + process.env.NODE_ENV) || {}
);

