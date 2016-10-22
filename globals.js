module.exports = {
  'default': { 
    baseURL : 'https://www.robein.nl/',
    logsEnabled : true
  },

  // Abord all on test fail
  abortOnAssertionFailure: true,

  // Duration between two checks
  waitForConditionPollInterval: 300,

  // Timeout duration
  waitForConditionTimeout: 5000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned : false,

  beforeEach: function(browser, done) {
    browser
      .log('Browser ' + browser.options.desiredCapabilities.browserName + ' started', 'message')
      .windowMaximize()
      .url(this.default.baseURL).perform(function() {
        done();
      });
  },

  afterEach: function(browser, done) {
    browser
      .end()
      .log('Browser ' + browser.options.desiredCapabilities.browserName + ' stoped', 'message').perform(function() {
        done();
      });
  }
};