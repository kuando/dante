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

        score: {
            type: DataTypes.INTEGER
        },

        sequence: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'tb_vote_option'
    });

    return VoteOption;
};