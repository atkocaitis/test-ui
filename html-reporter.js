const HtmlReporter = require('nightwatch-html-reporter');
const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports/'
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
