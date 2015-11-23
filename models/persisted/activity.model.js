/**
 * Created by Frank on 15/11/23.
 */

'use strict';

module.exports = function (db, DataTypes) {
    const Activity = db.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            len: [6, 128]
        },

        cover: {
            type: DataTypes.STRING(11),
            unique: false,
            allowNull: false
        },

        visitedCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        sharedCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        usageCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        followedCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        isPrivate: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },

        hasEnroll: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        hasVote: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }

    }, {
        tableName: 'tb_activity',
        classMethods: {
            associate: function (models) {
                Activity.belongsTo(models.ActivityType, {as: 'tagGroup'});
                Activity.belongsTo(models.User, {as: 'user'});
                Activity.belongsToMany(models.User, {
                    as: 'Followers',
                    foreignKey: 'activityId',
                    through: models.ActivityFollow
                })
            }
        }
    });

    return Activity;
};