/**
 * Created by Frank on 15/11/24.
 */
'use strict';
module.exports = function (db, DataTypes) {
    return db.define("TopicActivity", {
        order: {
            type: DataTypes.INTEGER
        }
    }, {tableName: 'tb_topic_activity'});
};