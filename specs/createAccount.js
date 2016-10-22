module.exports = {
  tags: ['createAccount'],
  'create account test' : function(browser) {
    browser
      .page.Menu().acceptCookies()
      .page.Menu().openAccount()
      .page.Invest().setInitial('10000')
      .page.Invest().setMonthly('1000')
      .page.Invest().setPortfolio()
      .page.Invest().submit()
      .page.CreateAccount().selectAccountForMyself()
      .page.CreateAccount().setEmail('test@test.lt')
      .page.CreateAccount().setPassword('Test@123')
      .page.CreateAccount().setPasswordRepeat('Test@123');
  },

  'data driven testing - valid emails' : function(browser) {
    browser
      .page.Menu().openAccount()
      .page.Invest().setInitial('10000')
      .page.Invest().setMonthly('1000')
      .page.Invest().setPortfolio()
      .page.Invest().submit()
      .page.CreateAccount().selectAccountForMyself()
      .page.CreateAccount().validEmailsDataTest();
  },

  'data driven testing - invalid emails' : function(browser) {
    browser
      .page.Menu().openAccount()
      .page.Invest().setInitial('10000')
      .page.Invest().setMonthly('1000')
      .page.Invest().setPortfolio()
      .page.Invest().submit()
      .page.CreateAccount().selectAccountForMyself()
      .page.CreateAccount().inValidEmailsDataTest();
  }
};
