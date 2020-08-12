const {decoratePage} = require('../../../../lib');

class LoginFragment {
  constructor(page, rootFragmentSelector = '#email') {
    this.page = page;
    this.rootSelector = rootFragmentSelector;
    decoratePage(LoginFragment);
  }

  get email() {
    return this.page.$('#email');
  }

  get password() {
    return this.page.$('#passwd');
  }

  get submitLogin() {
    return this.page.$('#SubmitLogin');
  }

  async login(username, password) {
    await (await this.email).type(username);
    await (await this.password).type(password);
    await (await this.submitLogin).click();
  }
}

module.exports = {
  LoginFragment,
};
