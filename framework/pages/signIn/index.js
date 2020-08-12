
const {LoginFragment} = require('./fragments/login');
const {RegisterFragment} = require('./fragments/register');

class SignInPage {
  constructor(page) {
    this.page = page;
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


module.exports = {
  SignInPage,
};

