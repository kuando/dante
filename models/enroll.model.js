/**
 * Created by Frank on 15/11/24.
 */
'use strict';

module.exports = function (db, DataTypes) {
    const Enroll = db.define("Enroll", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        extras: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        }

    }, {
        tableName: 'tb_enroll',
        classMethods: {
            associate: function (models) {
                Enroll.belongsTo(models.User);
            }
        }
    });

    return Enroll;

};