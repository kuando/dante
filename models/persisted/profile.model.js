/**
 * Created by Frank on 15/11/23.
 */

'use strict';

module.exports = function (db, DataTypes) {
    const Profile = db.define("Profile", {
        gender: {
            type: DataTypes.STRING(2),
            isIn: [['男', '女']]
        }
    }, {
        tableName: 'tb_profile',
        classMethods: {
            associate: function (models) {
                Profile.belongsTo(models.User, {as: 'user'});
            }
        }
    });

    return Profile;

};