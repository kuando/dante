/**
 * Created by Frank on 15/11/23.
 */

'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = function (db, DataTypes) {
    const User = db.define("User", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                username: isUsername
            }
        },

        phone: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false,
            validate: {
                phone: isPhoneNumber
            },
            comment: '手机'
        },

        password: {
            type: DataTypes.STRING(128)
        },

        email: {
            type: DataTypes.STRING(50),
            isEmail: true
        },

        provider: {
            type: DataTypes.STRING,
            defaultValue: 'local'
        },

        providerData: {
            type: DataTypes.JSONB
        },

        additionalProvidersData: {
            type: DataTypes.JSONB
        },

        resetPasswordToken: {
            type: DataTypes.STRING
        },

        resetPasswordExpires: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'tb_user',
        classMethods: {
            associate: function (models) {
                User.belongsToMany(models.Activity, {
                    as: 'FollowedActivities',
                    through: models.ActivityFollow
                });
                User.belongsToMany(User, {
                    as: 'Follows',
                    through: models.UserFollow
                });
                User.belongsToMany(User, {
                    as: 'Fans',
                    through: models.UserFollow
                });

                User.hasMany(models.Message, {
                    foreignKey: 'to'
                });
            }
        },

        instanceMethods: {

            toJSON: function () {
                var values = this.get();
                delete values.password;
                return values;
            },

            authenticate: function (password) {
                return this.provider === 'local' && bcrypt.compareSync(password, this.password);
            },

            accessToken: function () {
                return jwt.sign({
                    id: this.id,
                    username: this.username,
                    phone: this.phone
                }, 'secret');
            }
        }
    });

    User.hook('beforeCreate', hashPassword);
    User.hook('beforeUpdate', hashPassword);
    User.hook('beforeValidate', function (user) {

    });
    return User;
};

function hashPassword(user) {
    if (user.password) {
        try {
            user.password = bcrypt.hashSync(user.password, 8);
        } catch (err) {
            throw new Error('密码加密失败');
        }
    }
}

function isPhoneNumber(phone) {
    var isValid = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    if (!isValid) {
        throw new Error('手机号码格式错误');
    }
}

function isUsername(username) {
    var isValid = username.match(/^[a-zA-Z0-9u4e00-u9fa5]{2,11}$/);
    if (!isValid) {
        throw new Error('用户名只能由2-10位的英文,数字或者汉字组成');
    }
}


