/**
 * Created by Frank on 15/11/24.
 */

'use strict';
module.exports = function (db, DataTypes) {
    return db.define("EnrollField", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        order: {
            type: DataTypes.INTEGER
        },

        isRequired: {
            type: DataTypes.BOOLEAN
        },

        label: {
            type: DataTypes.STRING,
            allowNull: false
        },

        helpText: {
            type: DataTypes.STRING
        },

        options: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        }

    }, {
        tableName: 'tb_enroll_fields'
    });

};