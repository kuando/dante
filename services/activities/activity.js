/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const _ = require('lodash');
const models = require('../../models');
const Activity = models.Activity;
module.exports = {

    /**
     * 创建一个空的活动
     * @param user
     * @returns {Function|*}
     */
    createEmptyActivity: function (user, theme) {
        return Activity.findOrCreate({
            where: {
                status: 0,
                AuthorId: user.id,
                ActivityThemeId: theme
            }
        }).spread(activity=> {
            return activity;
        });
    },

    createActivity: function (id, data) {
        return Activity.findById(id).then(activity => {
            let activityData = _.pick(data, ['name', 'cover', 'extras', 'visitCount', 'shareCount', 'like']);
            return activity.update(activityData);
        }).then(()=> {
            let tags = _.pick(data, 'tags');
            return activity.setTags(tags);
        }).then(()=> {

        })
    }
};