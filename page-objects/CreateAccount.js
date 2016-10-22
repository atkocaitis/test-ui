module.exports = {
  elements: {
    accountForMyself: { selector: '#createaccount-container > section:nth-child(1) > div > div > div:nth-child(1) > div.col-md-12.m-t-md.m-b-md.text-center > button' },
    email: { selector: '#accountemail'},
    emailValid: { selector: '.has-success'},
    emailInValid: { selector: '.has-error'},
    password: { selector: 'input[name="accountpassword"]'},
    passwordRepeat: { selector: 'input[name="accountrepeatpassword"]'}
  },
  commands: [{
    /**
    * Function to select Account For Myself
    * @return {object} Return page object for chaining
    */
    selectAccountForMyself: function() {
      this
        .waitForElementPresent('@accountForMyself')
        .moveToElement('@accountForMyself', 0, 0)
        .click('@accountForMyself');

      return this.api; 
    },

    /**
    * Function to type email
    * @param  {string} email Email
    * @return {object} Return page object for chaining
    */
    setEmail: function(email) {
      this
        .waitForElementPresent('@email')
        .moveToElement('@email', 0, 0)
        .setValue('@email', email);

      return this.api; 
    },

    /**
    * Function to type password
    * @param  {string} password Password
    * @return {object} Return page object for chaining
    */
    setPassword: function(password) {
      this
        .waitForElementPresent('@password')
        .moveToElement('@password', 0, 0)
        .setValue('@password', password);

      return this.api; 
    },

    /**
    * Function to type password repeat
    * @param  {string} password Password
    * @return {object} Return page object for chaining
    */
    setPasswordRepeat: function(password) {
      this
        .waitForElementPresent('@passwordRepeat')
        .moveToElement('@passwordRepeat', 0, 0)
        .setValue('@passwordRepeat', password);

      return this.api; 
    },

    /**
    * Function to test email using test data file
    * @return {object} Return page object for chaining
    */
    validEmailsDataTest: function() {
      this.json = require('../testData/validEmails.json');

      for(var item in this.json.emails) {
        this
          .waitForElementPresent('@email')
          .moveToElement('@email', 0, 0)
          .clearValue('@email')
          .setValue('@email', this.json.emails[item])
          .waitForElementPresent('@emailValid');
      };

      return this.api; 
    },

    /**
    * Function to test email using test data file
    * @return {object} Return page object for chaining
    */
    inValidEmailsDataTest: function() {
      this.json = require('../testData/invalidEmails.json');

      for(var item in this.json.emails) {
        this
          .waitForElementPresent('@email')
          .moveToElement('@email', 0, 0)
          .clearValue('@email')
          .setValue('@email', this.json.emails[item])
          .waitForElementPresent('@emailInValid');
      };
      
      return this.api; 
    }
  }]
};