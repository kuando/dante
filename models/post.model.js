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

        content: {
            type: DataTypes.TEXT
        }

    }, {
        tableName: 'tb_post'
    });

    return Post;

};