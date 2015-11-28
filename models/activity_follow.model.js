/**
 * Created by Frank on 15/11/23.
 */
'use strict';

module.exports = function (db, DataTypes) {
    return db.define("ActivityFollow", {
        usageCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'tb_activity_follow'
    });

};