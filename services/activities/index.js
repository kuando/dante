/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const _ = require('lodash');

module.exports = _.extend(
    require('./activity'),
    require('./activityTheme')
);
