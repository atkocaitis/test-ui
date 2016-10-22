module.exports = {
  elements: {
    initial: { selector: '#profileselection > section.darkgray-section > div > div:nth-child(2) > div:nth-child(1) > div > input' },
    monthly: { selector: '#profileselection > section.darkgray-section > div > div:nth-child(2) > div.col-md-4.col-md-offset-4.m-b-xs.m-t-xs.editmodefont > div > input' },
    portfolioNeutral: { selector: '#testet > li:nth-child(3) > a'},
    submit: { selector: '#submitprofileneu'}
  },
  commands: [{
    /**
    * Function to type in initial investment
    * @param  {string} amount Amount
    * @return {object} Return page object for chaining
    */
    setInitial: function(amount) {
      this
        .waitForElementPresent('@initial')
        .moveToElement('@initial', 0, 0)
        .clearValue('@initial')
        .setValue('@initial', amount);

      return this.api; 
    },

    /**
    * Function to type in monthly investment
    * @param  {string} amount Amount
    * @return {object} Return page object for chaining
    */
    setMonthly: function(amount) {
      this
        .waitForElementPresent('@monthly')
        .moveToElement('@monthly', 0, 0)
        .clearValue('@monthly')
        .setValue('@monthly', amount);

      return this.api; 
    },

    /**
    * Function to select neutral portfolio
    * @return {object} Return page object for chaining
    */
    setPortfolio: function() {
      this
        .waitForElementPresent('@portfolioNeutral')
        .moveToElement('@portfolioNeutral', 0, 0)
        .click('@portfolioNeutral');

      return this.api; 
    },

    /**
    * Function to submit
    * @return {object} Return page object for chaining
    */
    submit: function() {
      this
        .waitForElementPresent('@submit')
        .moveToElement('@submit', 0, 0)
        .click('@submit');

      return this.api; 
    }
  }]
};