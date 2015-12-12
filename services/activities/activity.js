/**
 * Created by Frank on 15/12/1.
 */
'use strict';
const _ = require('lodash');
const HTTPError = require('node-http-error');
const models = require('../../models');
const Activity = models.Activity;
const Vote = models.Vote;
const VoteOption = models.VoteOption;
const EnrollField = models.EnrollField;


module.exports = {

    /**
     * 创建一个空的活动
     * @param user
     * @param theme
     * @returns {Function|*}
     */
    createEmptyActivity: function (user, theme) {
        return Activity.findOrCreate({
            where: {
                status: 0,
                AuthorId: user.id,
                ActivityThemeId: theme.id,
                template: theme.template
            }
        }).spread(activity=> {
            return activity;
        });
    },

    /**
     * 发布一个新的活动
     * @param id
     * @param data
     * @returns {*}
     */
    publishActivity: function (id, data) {
        return Activity.findById(id).then(activity => {
            if (!activity) {
                throw new HTTPError(400, 'activity not exist');
            }
            let activityData = data.activity || {};
            if (activity.status === 0) {
                activityData.status = 2; // 设置为发布状态
            }
            return activity.update(activityData);

        }).then(activity => {
            let itemData = data.item;
            let ItemModel = models[activity.template];
            if (!ItemModel) {
                throw new HTTPError(400, 'illegal item model ');
            }
            return activity.getItem().then(item => {
                if (item) {
                    return item.update(itemData);
                }
                return activity.setItem(ItemModel.build(itemData));
            }).then(item => {
                let ret = activity.get({plain: true});
                ret.item = item.get({plain: true});
                return ret;
            });
        });
    },

    /**
     * 添加报名
     * @param id
     * @param extras
     * @returns {*}
     */
    addEnroll: function (id, extras) {
        return Activity.findById(id, {attributes: ['id', 'hasEnroll']}).then(activity => {
            if (!activity) {
                throw new HTTPError(400, 'activity not exist');
            }
            if (!activity.hasEnroll) {
                return activity.update({hasEnroll: true});
            }
            return activity;
        }).then(activity => {
            return EnrollField.destroy({
                where: {
                    ActivityId: activity.id
                }
            }).then(()=> {
                if (extras) {
                    if (!_.isArray(extras)) {
                        extras = [extras];
                    }
                    _.forEach(extras, extra => {
                        extra.ActivityId = activity.id;
                    });
                    return EnrollField.bulkCreate(extras).then(()=> {
                        return true;
                    });
                }
                return true;
            });
        });
    },

    /**
     * 删除报名
     * @param id 报名关联的活动id
     * @returns {*}
     */
    deleteEnroll: function (id) {
        return Activity.findById(id, {attributes: ['id', 'hasEnroll']}).then(activity => {
            if (!activity) {
                throw new HTTPError(400, 'activity not exist');
            }
            //没有报名直接返回
            if (!activity.hasEnroll) {
                return true;
            }
            return activity.update({hasEnroll: false})
                .then(activity=> {
                    return EnrollField.destroy({
                        where: {
                            ActivityId: activity.id
                        }
                    })
                })
                .then(()=> {
                    return true;
                });
        });
    },


    /**
     * 添加投票
     * @param id
     * @param data
     * @returns {*}
     */
    addVote: function (id, data) {
        return Activity.findById(id, {
                attributes: ['id', 'hasVote']
            })
            .then(activity => {
                if (!activity) {
                    throw new HTTPError(400, 'activity not exist');
                }
                if (!activity.hasVote) {
                    return activity.update({hasVote: true});
                }
                return activity;
            })
            .then(activity=> {
                //添加投票信息
                return activity.getVote({attributes: ['id']})
                    .then(vote=> {
                        return vote || activity.setVote(Vote.build(data));
                    });
            })
            .then(vote=> {
                //添加投票选项
                return VoteOption.destroy({
                        where: {VoteId: vote.id}
                    })
                    .then(()=> {
                        let options = _.forEach(data.options, option => {
                            option.VoteId = vote.id;
                        });
                        return VoteOption.bulkCreate(options);
                    });
            })
            .then(()=> {
                return true;
            });
    },

    /**
     * 删除投票
     * @param id  投票关联的活动id
     * @returns {*}
     */
    deleteVote: function (id) {
        return Activity.findById(id, {
            attributes: ['id', 'hasVote']
        }).then(activity => {
            if (!activity) {
                throw new HTTPError(400, 'activity not exist');
            }
            if (!activity.hasVote) {
                return true;
            }
            return activity.update({hasVote: false})
                .then(activity=> {
                    return Vote.destroy({
                        where: {
                            ActivityId: activity.id
                        }
                    });
                })
                .then(()=> {
                    return true;
                });
        });
    }
};