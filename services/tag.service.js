/**
 * Created by Frank on 15/11/30.
 */
'use strict';
const _ = require('lodash');
const HTTPError = require('node-http-error');
const models = require('../models');
const Tag = models.Tag;
const TagGroup = models.TagGroup;

module.exports = {

    findAll: function () {
        return Tag.findAll().then(tags => {
            return tags;
        });
    },

    create: function (groupId, data) {
        return TagGroup.findById(groupId).then(group => {
            if (!group) {
                throw new HTTPError(400, '标签组不存在');
            }
            if (_.isArray(data)) {
                return group.setTags(data);
            }
            return group.setTag([data]);
        });
    },

    deleteById: function (id) {
        return Tag.findById(id).then((tag)=> {
            if (!tag) {
                throw new HTTPError('标签不存在');
            }
            return tag.destroy();
        });
    }
};