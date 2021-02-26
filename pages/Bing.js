module.exports = {
  elements: {
    searchInput: { selector: '#sb_form_q'},
    searchButton: { selector: '[for="sb_form_go"]'},
    searchImageButton: { selector: '#sb_sbip'},
    imageSearchResults: { selector: '#rsc_Header a'},
    fileInput: { selector: '#sb_fileinput'},
    mainTitle: { selector: '#b_context h2.b_entityTitle'},
    settingsButton: { selector: '#id_sc'},
    menuBarToggleOffButton: { selector: '#qs_menu_ctrl .toggle_on'},
    menuBar: { selector: '#hdr ul.scopes'},
    historyButton: { selector: 'a[href*="/profile/history"]'},
    historyQuery: { selector: '.query-list__query-row .query-list__requery-link'}
  },
  commands: [{
    search: function(val) {
      this
        .log(`Searching for ${val}`)
        .waitForElementPresent('@searchInput')
        .setValue('@searchInput', val)
        .waitForElementPresent('@searchButton')
        .click('@searchButton');

      return this.api;
    },
    checkMainTitle: function(val) {
      this
        .log(`Checking if main title is ${val}`)
        .waitForElementPresent('@mainTitle')
        .assert.containsText('@mainTitle', val);

      return this.api;
    },
    searchImage: function(val) {
      this
        .log(`Searching for image ${val}`)
        .waitForElementPresent('@searchImageButton')
        .click('@searchImageButton')
        .setValue('@fileInput', require('path').resolve(`data/${val}`));

      return this.api;
    },
    checkImageSearchResults: function(val) {
      this
        .log(`Checking if image search results contains title ${val}`)
        .waitForElementPresent('@imageSearchResults')
        .assert.containsText('@imageSearchResults', val);

      return this.api;
    },
    openSettingsMenu: function() {
      this
        .log(`Open settings menu`)
        .waitForElementPresent('@settingsButton')
        .moveToElement('@settingsButton', 0, 0)
        .pause(3000)
        .click('@settingsButton');

      return this.api;
    },
    hiddeMenuBar: function() {
      this
        .log(`Clicking hide top menu bar toggle`)
        .waitForElementPresent('@menuBarToggleOffButton')
        .click('@menuBarToggleOffButton');

      return this.api;
    },
    checkIfMenuBarNotVisivle: function() {
      this
        .log(`Checking that menu bar is hidden`)
        .waitForElementNotPresent('@menuBar');

      return this.api;
    },
    openHistoryPage: function() {
      this
        .log(`Opening search history page`)
        .waitForElementPresent('@historyButton')
        .click('@historyButton');

      return this.api;
    },
    checkHistoryQueryContains: function(val) {
      this
        .log(`Checking that history query contains ${val}`)
        .waitForElementPresent('@historyQuery')
        .assert.containsText('@historyQuery', val);

      return this.api;
    }
  }]
};
