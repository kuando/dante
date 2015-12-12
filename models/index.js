/**
 * Created by Frank on 15/11/23.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require('../config/config').database;
const sequelize = new Sequelize(config.database, config.username, config.password, config);
var models = {};


fs.readdirSync(path.resolve(__dirname)).forEach(file=> {
    if (file === 'index.js') {
        return;
    }
    var model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
});


Object.keys(models).forEach((modelName)=> {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
        models[modelName].models = models;
    }
});

//sequelize.sync({force:true}).then(function(){
//    console.log('database created ');
//})

console.log('All models loaded');

module.exports = models;