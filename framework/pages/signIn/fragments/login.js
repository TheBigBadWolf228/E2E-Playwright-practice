const {decoratePage} = require('../../../../lib');

class LoginFragment {
  constructor(page, rootFragmentSelector = '#email') {
    this.page = page;
    this.rootSelector = rootFragmentSelector;
    decoratePage(LoginFragment);
  }

  async email() {
    const elementHandler = await this.page.$('#email');
    return elementHandler;
  }

  async password() {
    const elementHandler = await this.page.$('#passwd');
    return elementHandler;
  }

  async submitLogin() {
    const elementHandler = await this.page.$('#SubmitLogin');
    return elementHandler;
  }

  async login(username, password) {
    await (await this.email()).type(username);
    await (await this.password()).type(password);
    await (await this.submitLogin()).click();
  }
}

module.exports = {
  LoginFragment,
};
