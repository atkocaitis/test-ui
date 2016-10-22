module.exports = {
  "src_folders": ["specs"],
  "output_folder": "reports",
  "page_objects_path" : "page-objects",
  "custom_commands_path" : "commands",
  "globals_path" : "globals.js",

  "selenium": {
    "start_process": true,
    "server_path": "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": require('chromedriver').path
    }
  },

  "test_settings": {
    "default": {
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
};
