/**
 * Created by Frank on 15/11/30.
 */

'use strict';
const _ = require('lodash');
const models = require('../models');
const createError = require('http-errors');

const ComponentGroup = models.ComponentGroup;

module.exports = {

    create: function (data) {
        return ComponentGroup.create(data)
            .then((group)=> {
                return group;
            });
    },

    findById: function (id) {
        return ComponentGroup.findById(id)
            .then((group)=> {
                return group;
            });
    },

    findOne: function (filters) {
        return ComponentGroup.findOne(filters)
            .then((group)=> {
                return group;
            });
    },

    findAll: function (filters) {
        return ComponentGroup.findAll(filters)
            .then((group)=> {
                return group;
            });
    },

    updateById: function (id, modifyData) {
        return ComponentGroup.findById(id).then(group => {
            if (!group) {
                throw new createError(400, '组件分组不存在');
            }
            _.assign(group, modifyData);
            return group.save();
        });
    },

    destroyById: function () {
        return ComponentGroup.findById(id).then(group => {
            if (!group) {
                throw createError(400, '组件分组不存在或已删除');
            }
            return group.destroy();
        });
    },


    addComponents: function (id, components) {
        return ComponentGroup.findById(id).then(group => {
            if (!group) {
                throw createError(400, '组件分组不存在或已删除');
            }
            if (_.isArray(components)) {
                _.forEach(components, component=> {
                    group.push(component);
                });
            } else {
                group.push(components);
            }
            return group.save();
        });
    },

    removeComponent: function (id, index) {
        return ComponentGroup.findById(id).then(group => {
            if (!group) {
                throw createError(400, '组件分组不存在或已删除');
            }
            group.components = group.components.splice(index, 1);
            return group.save();
        });
    }
};
