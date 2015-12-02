/**
 * Koa config
 */

'use strict';

const path = require('path');
const koa = require('koa');
const hbs = require('koa-hbs');
const router = require('./router');
const helpers = require('./functions/hbs-helpers');
const error = require('koa-error');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const passport = require('koa-passport');
const flash = require('koa-flash');
const viewPath = path.resolve(__dirname, '../views');
const staticPath = path.resolve(__dirname, '../build');

const app = koa();
app.keys = ['secret'];
app.use(require('koa-static')(staticPath));
app.use(session());
app.use(flash());
app.use(bodyParser());

// passport
require('./passport')(passport);
app.use(passport.initialize());
//app.use(passport.session());


// handlebars
helpers.register(hbs);
app.use(hbs.middleware({
    viewPath: viewPath,
    partialsPath: viewPath + '/partials',
    layoutsPath: viewPath + '/layouts',
    defaultLayout: 'layout',
    disableCache: true
}));

app.use(error());
app.use(require('../middleware/jwt')());
app.use(router({
    directory: 'controllers'
}));


module.exports = app;