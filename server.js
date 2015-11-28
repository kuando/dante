/**
 * Created by Frank on 15/11/22.
 */
/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var chalk = require('chalk');

// connect to mongodb

// Bootstrap server
var app = require('./config/koa');

// Start server
app.listen(config.port, config.ip, function () {
    console.log('Server listening on %d, in %s mode', config.port, process.env.NODE_ENV);
});

// Expose app
exports = module.exports = app;
// Print runtime env info
console.log('--');
console.log(chalk.green(config.app.title + ' application started'));
console.log(chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
console.log(chalk.green('Port:\t\t\t\t' + config.port));
console.log(chalk.green('Database:\t\t\t' + config.database.database));

console.log('--');
