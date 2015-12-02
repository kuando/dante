/**
 * Created by Frank on 15/12/1.
 */
'use strict';

const models = require('../../models');
const Activity = models.Activity;
module.exports = {

    /**
     * 创建一个空的活动
     * @param user
     * @returns {Function|*}
     */
    createEmptyActivity: function (user, activityType) {
        return Activity.findOrCreate({
            where: {
                status: 0,
                AuthorId: user.id,
                ActivityTypeId: activityType.id
            }
        }).spread(activity=> {
            return activity;
        });
    }
};