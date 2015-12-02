/**
 * Created by Frank on 15/11/23.
 */

'use strict';

module.exports = function (db, DataTypes) {
    return db.define("ActivityType", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '活动类型名称不能为空'
                }
            }
        },
        cover: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '活动类型封面不能为空'
                }
            }
        },

        description: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '活动类型描述不能为空'
                }
            }
        },

        theme: {
            type: DataTypes.STRING(128),
            allowNull: false,
            defaultValue: "post",
            isIn: [['post']]
        }

    }, {
        tableName: 'tb_activity_type'
    });

};