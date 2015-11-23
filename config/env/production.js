/**
 *
 * Created by Frank on 15/7/29.
 */

'use strict';

module.exports = {
    app: {
        title: 'api-production'
    },
    db: {
        uri: 'mongodb://10.165.69.183,10.162.219.31,10.251.192.170/hizuoye-pro',
        options: {
            db: {native_parser: true},
            replset: {
                rs_name: 'rs1',
                poolSize: 10,
                socketOptions: {
                    keepAlive: 1,
                    connectTimeoutMS: 30000
                }
            },
            server: {
                poolSize: 5,
                socketOptions: {
                    keepAlive: 1,
                    connectTimeoutMS: 30000
                }
            },
            user: 'hizuoyeAdmin',
            pass: 'dk12345!@#$%'
        }
    },

    redis: {
        host: 'a97582a7d76211e4.m.cnbja.kvstore.aliyuncs.com',
        port: 6379,
        options: {
            auth_pass: 'a97582a7d76211e4:Mooc1988'
        }
    },

    log: {
        format: 'combined',
        options: {
            stream: 'access.log'
        }
    },

    jwt: {
        secret: 'lovekuando',
        key: 'jwtUser'
    },

    weixin: {
        appid: 'wxe68418f13df6bb70',
        secret: '0556a946d4a4abc3fb2b6377596620f9'
    },
    apiBaseUrl: 'api.hizuoye.com',

    qn: {
        accessKey: 'SPJ9b_qmVxy0FQU-93J4xb5EbHv9Z4Jn_-78f8gr',
        secretKey: 'NOFnKRTsd1RjjYoyT1qPAgHyczBmAjl-s26GXpA4',
        bucket: 'yirgacheffe',
        visitUrl: 'resource.hizuoye.com'
    },
    docUrl: ''
};

