/**
 * Koa config
 */

'use strict';

const path = require('path');
const koa = require('koa');
const hbs = require('koa-hbs');
const router = require('lark-router');

const app = koa();
const viewPath = path.resolve(__dirname, '../views');
const staticPath = path.resolve(__dirname, '../build');
app.use(require('koa-static')(staticPath));

app.use(hbs.middleware({
    viewPath: viewPath,
    partialsPath: viewPath + '/partials',
    layoutsPath: viewPath + '/layouts',
    defaultLayout: 'layout',
    disableCache: true
}));

app.use(router({
    directory: 'controllers'
}));

module.exports = app;