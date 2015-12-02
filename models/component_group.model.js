/**
 * Created by Frank on 15/11/24.
 */
'use strict';

module.exports = function (db, DataTypes) {
    return db.define("ComponentGroup", {
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
        },
        components: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            defaultValue: []
        }
    }, {
        tableName: 'tb_component_group'
    });

};