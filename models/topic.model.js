/**
 * Created by Frank on 15/11/23.
 */
'use strict';
module.exports = function (db, DataTypes) {
    const Topic = db.define("Topic", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            isNull: {
                msg: '名称不能为空'
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            isNull: {
                msg: '导语不能为空'
            }
        },
        cover: {
            type: DataTypes.STRING(50),
            allowNull: false,
            isNull: {
                msg: '封面不能为空'
            }
        }
    }, {
        tableName: 'tb_topic',
        classMethods: {
            associate: function (models) {
                Topic.belongsToMany(models.Activity, {through: models.TopicActivity});
            }
        }
    });

    return Topic;
};