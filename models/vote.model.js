/**
 * Created by Frank on 15/11/24.
 */
'use strict';
module.exports = function (db, DataTypes) {
    const Vote = db.define("Vote", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        description: {
            type: DataTypes.STRING
        },

        isMulti: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        maxSelect: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },

        deadline: {
            type: DataTypes.DATE
        },

        result: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'tb_vote',
        classMethods: {
            associate: function (models) {
                Vote.belongsTo(models.Activity);
                Vote.hasMany(models.VoteOption, {as: 'Options'})
            }
        }
    });

    return Vote;
};