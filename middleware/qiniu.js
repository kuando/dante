/**
 * Created by Frank on 15/7/22.
 */
const qn = require('qiniu');
const _ = require('lodash');
var config = require('../config/config').qiniu;
qn.conf.ACCESS_KEY = config.accessKey;
qn.conf.SECRET_KEY = config.secretKey;

function generateToken(policy) {
    if (typeof policy !== 'object') {
        return false;
    }
    policy = _.assign({
        scope: config.bucket
    }, policy);
    var putPolicy = new qn.rs.PutPolicy2(policy);
    return putPolicy.token();
}


/**
 * 七牛上传token中间件
 *
 * @param opts
 */
module.exports = function (opts) {
    opts = opts || {};
    const fsizeLimit = opts.limit || 1024 * 1024 * 5;
    const mimeLimit = opts.mime || 'image/*';
    return function *(next) {
        var policy = {
            fsizeLimit: fsizeLimit,
            mimeLimit: mimeLimit,
            saveKey: '$(etag)$(ext)'
        };
        this.state.token = generateToken(policy);
        yield next;
    };

};


