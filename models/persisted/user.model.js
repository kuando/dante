/**
 * Created by Frank on 15/11/23.
 */

'use strict';

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
            len: [6, 30]
        },

        phone: {
            type: DataTypes.STRING(11),
            unique: false,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
            len: [6, 50]
        },

        email: {
            type: DataTypes.STRING(50),
            isEmail: true
        }

    }, {
        tableName: 'tb_user',
        classMethods: {
            associate: function (models) {
                User.belongsToMany(models.Activity, {
                    as: 'FollowedActivities',
                    foreignKey: 'userId',
                    through: models.ActivityFollow
                })
            }
        }
    });

    return User;

};