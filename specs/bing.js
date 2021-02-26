const testData = require('../data/searchValues.json');

module.exports = {
  tags: ['bing'],
  
  'Testing Bing search with single keyword' : function(browser) {
    browser
      .url(browser.globals.url)
      .page.Bing().search('cheese')
      .page.Bing().checkMainTitle('Cheese');
  },

  'Testing menu bar hide functionality' : function(browser) {
    browser
      .url(browser.globals.url)
      .page.Bing().openSettingsMenu()
      .page.Bing().hiddeMenuBar()
      .page.Bing().checkIfMenuBarNotVisivle();
  },

  'Testing Bing search using data-driven approach' : function(browser) {
    for (data of testData.data) {
      browser
        .url(browser.globals.url)
        .page.Bing().search(data.search)
        .page.Bing().checkMainTitle(data.title);
    };
  },

  'Testing Bing search using image search' : function(browser) {
    browser
      .url(browser.globals.url)
      .page.Bing().searchImage('swiss_cheese_cubes.jpg')
      .page.Bing().checkImageSearchResults('Cheese');
  },

  'Testing Bing search history' : function(browser) {
    browser
      .url(browser.globals.url)
      .page.Bing().search('cheese')
      .page.Bing().openSettingsMenu()
      .page.Bing().openHistoryPage()
      .page.Bing().checkHistoryQueryContains('cheese');
  }
};
