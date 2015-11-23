/**
 * Created by Frank on 15/11/23.
 */
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require(__dirname + '/../../config/config').db;

var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file)=> {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

sequelize.sync({
    force: true
}).then(function () {
    console.log('all models sync to your database');
});

module.exports = db;