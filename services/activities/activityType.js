/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const _ = require('lodash');
const models = require('../../models');
const ActivityType = models.ActivityType;

module.exports = {

    createActivityType: function (data) {
        return ActivityType.create(data).then(activityType => {
            return activityType;
        });
    },

    findActivityTypeById: function (id) {
        return ActivityType.findById(id).then(activityType => {
            return activityType;
        });
    },

    findAllActivityTypes: function (filters) {
        return ActivityType.findAll().then(activityTypes => {
            return activityTypes;
        });
    }

};