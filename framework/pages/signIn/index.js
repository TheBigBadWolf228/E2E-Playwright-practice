
const {LoginFragment} = require('./fragments/login');
const {RegisterFragment} = require('./fragments/register');
const {decoratePage, BasePage} = require('../../../lib');

class SignInPage extends BasePage {
  constructor(page, pageRootSelector = '#columns') {
    super(page, pageRootSelector);
    this.loginFragment = new LoginFragment(page);
    this.registerFragment = new RegisterFragment(page);
  }

  async login(username, password) {
    await this.loginFragment.login(username, password);
  }

  async register(newUserMail, firstName, lastName, password, address, city,
      postalCode, mobilePhone) {
    await this.registerFragment.register(newUserMail, firstName,
        lastName, password, address, city, postalCode, mobilePhone);
  }
}

decoratePage(SignInPage);

module.exports = {
  SignInPage,
};

