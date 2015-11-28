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

function walkRouter(rootRouter, directory, base) {
    let files = fs.readdirSync(directory);
    files.forEach(file => {
        let filePath = path.resolve(directory, file);
        if (file === 'index.js') {
            return require(filePath)(rootRouter);
        }
        let subRouter = new Router();
        if (path.extname(file) === '.js') {
            let prefix = file.slice(0, file.indexOf('.js'));
            if (base) {
                prefix = base + '/' + prefix;
            }
            subRouter.prefix('/' + prefix);
            subRouter = require(filePath)(subRouter);
            rootRouter.use(subRouter.routes());
        } else {
            //如果是文件夹,递归调用
            rootRouter.use('', walkRouter(subRouter, filePath, file).routes());
        }
    });
    return rootRouter;
}





