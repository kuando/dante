/**
 * Created by Frank on 15/11/25.
 */

module.exports = function (db, DataTypes) {
    const Message = db.define("Message", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        to: {
            type: DataTypes.INTEGER
        },
        from: {
            type: DataTypes.INTEGER
        },

        title: {
            type: DataTypes.STRING
        },

        content: {
            type: DataTypes.TEXT
        },

        status: {
            type: DataTypes.INTEGER
        }

    }, {
        tableName: 'tb_message'
    });

    return Message;

};