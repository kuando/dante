/**
 * Created by Frank on 15/11/28.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

module.exports = function (opts) {
    let options = opts || {};
    let directory = options.directory || 'routes';
    let state = fs.statSync(directory);
    if (!state.isDirectory()) {
        throw new Error(`${directory} is not a directory`);
    }
    return walkRouter(new Router(), directory).routes();
};

/**
 * 递归注册路由
 * @param rootRouter
 * @param directory
 * @param base
 * @returns {*}
 */
function walkRouter(rootRouter, directory, base) {
    let files = fs.readdirSync(directory);
    base = base || '';
    files.forEach(file => {
        let router = new Router();
        let filePath = path.resolve(directory, file);
        let prefix = base;
        if (path.extname(file) === '.js') {
            if (file !== 'index.js') {
                let basename = path.basename(file, '.js');
                prefix = prefix === '' ? basename : prefix + '/' + basename;
            }
            if (prefix !== '') {
                router.prefix('/' + prefix);
            }
            router = registerRouter(filePath, router);
            rootRouter.use(router.routes());
        }
        else {
            //如果是文件夹,递归调用
            if (fs.statSync(filePath).isDirectory()) {
                rootRouter.use('', walkRouter(router, filePath, file).routes());
            }
        }
    });
    return rootRouter;
}

function registerRouter(filePath, router) {
    let handler = require(filePath);
    if ('function' === typeof handler && 'GeneratorFunction' === handler.constructor.name) {
        router.use(handler);
        return router;
    }
    if ('function' === typeof handler) {
        handler(router);
        return router;
    }
    console.warn('UnSupported handler type : ', filePath);
    return router;
}






