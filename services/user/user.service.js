/**
 * Created by Frank on 15/11/26.
 */
'use strict';
var models = require('../../models');

module.exports = {

    create: function (user) {
        if (!user) {
            return Promise.reject(new Error('缺少用户注册信息'));
        }
        if (!user.phone) {
            return Promise.reject(new Error('手机号不能为空'));
        }
        if (!user.password) {
            return Promise.reject(new Error('密码不能为空'));
        }
        let User = models.User;
        return User.findOne({
            where: {phone: user.phone},
            attributes: ['id']
        }).then(exit => {
            if (exit) {
                throw new Error('该手机已经注册');
            }
            //TODO 手机号验证

            if (!user.username) {
                user.username = user.phone;
            }
            return User.create(user);
        });
    },

    findAll: function (params) {
        return models.User.findAll().then(users=> {
            return users;
        });
    },

    findByPhone: function (phone) {
        return models.User.findOne({
            where: {phone: phone},
            attributes: ['id', 'password', 'provider', 'username', 'phone']
        });
    },

    findById: function (id) {
        return models.User.findById(id);
    }
};