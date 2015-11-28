/**
 * Created by Frank on 15/11/22.
 */
/**
 *
 * Created by Frank on 15/7/29.
 */

'use strict';

module.exports = {
    app: {
        title: '招生易开发环境'
    },
    database: {
        database: 'db_dante',
        username: 'postgres',
        password: '19930821',
        dialect: 'postgres',
        pool: {
            max: 1,
            min: 1
        },
        define: {
            updatedAt: false
        }
    }
};

