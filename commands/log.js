var chalk = require('chalk');

/**
* Function to print logs to console. Logs can be enabled/disabled from global.js
* @param  {string} message Message to print
* @param  {string} type Message type (message/error/warning) to use different color
* @return {object} Return this object
*/
var log = function(message, type) {

  this.perform(() => {
    if (this.globals.default.logsEnabled)
    switch(type) {
      case 'message':
        console.log(chalk.bgGreen.bold('  ' + message +  '  '));
        break;
      case 'error':
        console.log(chalk.bgRed.bold('  ' + message +  '  '));
        break;
      case 'warning':
        console.log(chalk.bgYellow.bold('  ' + message +  '  '));
        break;
      default:
        console.log(chalk.bgYellow.bold('  ' + message +  '  '));
        break;
    };
  });

  return this;
};

exports.command = log;