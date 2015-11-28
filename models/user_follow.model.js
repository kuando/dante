/**
 * Created by Frank on 15/11/25.
 */
'use strict';

module.exports = function (db, DataTypes) {
    return db.define("UserFollow", {
        fanId: {
            type: DataTypes.INTEGER
        },
        followedId: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'tb_user_follow'
    });

};