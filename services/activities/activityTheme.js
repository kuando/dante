/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const _ = require('lodash');
const models = require('../../models');
const ActivityTheme = models.ActivityTheme;

module.exports = {

    createActivityType: function (data) {
        return ActivityTheme.create(data).then(activityType => {
            return activityType;
        });
    },

    findActivityTypeById: function (id) {
        return ActivityTheme.findById(id).then(activityType => {
            return activityType;
        });
    },

    findAllActivityTypes: function (filters) {
        return ActivityTheme.findAll().then(activityTypes => {
            return activityTypes;
        });
    },

    deleteActivityThemeById: function (id) {
        return ActivityTheme.destroy({
            where: {
                id: id
            }
        });
    }
};