/**
 * Created by Frank on 15/11/24.
 */
'use strict';
module.exports = function (db, DataTypes) {
    const VoteOption = db.define("VoteOption", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        option: {
            type: DataTypes.STRING(128)
        },

        score: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        order: {
            type: DataTypes.INTEGER
        }

    }, {
        tableName: 'tb_vote_option'
    });

    return VoteOption;
};