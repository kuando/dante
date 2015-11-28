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
            len: [6, 30]
        },

        cover: {
            type: DataTypes.STRING(128),
            allowNull: false
        },

        description: {
            type: DataTypes.STRING(128),
            allowNull: false
        },

        theme: {
            type: DataTypes.STRING(128),
            allowNull: false,
            isIn: [['post']]
        }

    }, {
        tableName: 'tb_activity_type'
    });

};