module.exports = {
  elements: {
    account: { selector: 'div.navbar-collapse.collapse ul.nav.navbar-top-links.navbar-right a[href="/Profile"]' },
    cookie: { selector: '#cookie-bar a.cb-enable'}
  },
  commands: [{
    /**
    * Function to open account page
    * @return {object} Return page object for chaining
    */
    openAccount: function() {
      this
        .waitForElementVisible('@account')
        .click('@account');

      return this.api; 
    },

    /**
    * Function to accept Cookies
    * @return {object} Return page object for chaining
    */
    acceptCookies: function() {
      this
        .waitForElementVisible('@cookie')
        .click('@cookie');

      return this.api; 
    }
  }]
};