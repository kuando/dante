/**
 * Created by Frank on 15/11/23.
 */

'use strict';

module.exports = function (db, DataTypes) {
    var Activity = db.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(128),
            len: [6, 128]
        },

        cover: {
            type: DataTypes.STRING(11),
            unique: false
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

                Activity.belongsTo(models.ActivityTheme);

                Activity.belongsTo(models.User, {
                    as: 'Author'
                });

                Activity.belongsToMany(models.User, {
                    as: 'Followers',
                    through: models.ActivityFollow
                });

                Activity.belongsToMany(models.Tag, {
                    through: models.TagActivity
                });

                Activity.belongsToMany(models.Category, {
                    through: models.CategoryActivity
                });

                Activity.belongsToMany(models.Topic, {
                    through: models.TopicActivity
                });

                Activity.hasMany(models.EnrollFields);

                Activity.hasOne(models.Post);

            }
        }
    });
    return Activity;
};