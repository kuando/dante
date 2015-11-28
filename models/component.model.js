/**
 * Created by Frank on 15/11/24.
 */

'use strict';

module.exports = function (db, DataTypes) {
    const Component = db.define("Component", {
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
        tableName: 'tb_component',
        classMethods: {
            associate: function (models) {
                Component.belongsTo(models.ComponentGroup, {as: 'componentGroup'});
            }
        }
    });
    return Component;
};