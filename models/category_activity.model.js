/**
 * Created by Frank on 15/11/24.
 */

'use strict';
module.exports = function (db, DataTypes) {
    return db.define("CategoryActivity", {
        order: {
            type: DataTypes.INTEGER
        }
    }, {tableName: 'tb_category_activity'});
};