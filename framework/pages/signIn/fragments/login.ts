import {decoratePage, BaseFragment, $element} from '../../../../lib';

class LoginFragment extends BaseFragment {
  email;
  password;
  submitLogin;
  constructor(page, rootFragmentSelector = '#email') {
    super(page, rootFragmentSelector);
    this.email = $element(this.page, '#email');
    this.password = $element(this.page, '#passwd');
    this.submitLogin = $element(this.page, '#SubmitLogin');
  }

  async login(username, password) {
    await this.email.type(username);
    await this.password.type(password);
    await this.submitLogin.click();
  }
}

decoratePage(LoginFragment);

export {
  LoginFragment,
};
