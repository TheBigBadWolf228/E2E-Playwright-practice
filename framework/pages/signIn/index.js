
const {LoginFragment} = require('./fragments/login');
const {RegisterFragment} = require('./fragments/register');
const {decoratePage} = require('../../../lib');

class SignInPage {
  constructor(page, pageRootSelector = '#columns') {
    this.page = page;
    this.rootSelector = pageRootSelector;
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

