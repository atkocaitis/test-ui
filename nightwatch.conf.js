const chrome = require("chromedriver");
module.exports = (function (settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = chrome.path;
  settings.custom_commands_path = ['commands'];
  return settings;
})(require("./nightwatch.json"));
