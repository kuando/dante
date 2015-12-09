/**
 * Created by Frank on 15/11/24.
 */
'use strict';

module.exports = function (db, DataTypes) {
    const Post = db.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        extras: {
            type: DataTypes.JSON
        },
        //startTime: {
        //    type: DataTypes.DATE
        //},
        //endTime: {
        //    type: DataTypes.DATE
        //},
        //address: {
        //    type: DataTypes.STRING(128)
        //},
        content: {
            type: DataTypes.TEXT
        }

    }, {
        tableName: 'tb_post',
        classMethods: {
            associate: function (models) {
                Post.belongsTo(models.Activity);
            }
        }
    });

    return Post;

};