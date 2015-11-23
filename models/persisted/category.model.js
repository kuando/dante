/**
 * Created by Frank on 15/11/23.
 */
'use strict';

module.exports = function (db, DataTypes) {
    return db.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            isNull: {
                msg: '名称不能为空'
            }
        }
    }, {
        tableName: 'tb_category'
    });

};