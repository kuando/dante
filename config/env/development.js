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
        password: 'admin',
        dialect: 'postgres',
        pool: {
            max: 1,
            min: 1
        },
        define: {
            updatedAt: false
        }
    },
    qiniu: {
        accessKey: 'SPJ9b_qmVxy0FQU-93J4xb5EbHv9Z4Jn_-78f8gr',
        secretKey: 'NOFnKRTsd1RjjYoyT1qPAgHyczBmAjl-s26GXpA4',
        bucket: 'resource-hizuoye',
        visitUrl: '7xlmrh.com1.z0.glb.clouddn.com'
    }
};

