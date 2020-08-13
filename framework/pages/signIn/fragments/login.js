const {decoratePage, BaseFragment} = require('../../../../lib');

class LoginFragment extends BaseFragment {
  constructor(page, rootFragmentSelector = '#email') {
    super(page, rootFragmentSelector);
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

decoratePage(LoginFragment);

module.exports = {
  LoginFragment,
};
