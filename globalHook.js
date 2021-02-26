module.exports = {
  // Abord all on test fail
  abortOnAssertionFailure: true,

  // Duration between two checks
  waitForConditionPollInterval: 300,

  // Timeout duration
  waitForConditionTimeout: 10000,

  // assertion timeout
  retryAssertionTimeout: 10000,

  // perform timeout
  asyncHookTimeout : 10000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned : false,

  beforeEach: function(browser, done) {
    browser
      .log('Browser ' + browser.options.desiredCapabilities.browserName + ' started')
      .windowMaximize()
      .perform(function() {
        done();
      });
  },

  afterEach: function(browser, done) {
    browser
      .end()
      .log('Browser ' + browser.options.desiredCapabilities.browserName + ' stopped').perform(function() {
        done();
      });
  }
};
