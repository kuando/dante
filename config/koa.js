/**
 * Koa config
 */

'use strict';

const path = require('path');
const koa = require('koa');
const hbs = require('koa-hbs');
const router = require('lark-router');
const helpers = require('./functions/hbs-helpers');

const app = koa();
const viewPath = path.resolve(__dirname, '../views');
const staticPath = path.resolve(__dirname, '../build');
require('../models/persisted');

app.use(require('koa-static')(staticPath));

helpers.register(hbs);

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