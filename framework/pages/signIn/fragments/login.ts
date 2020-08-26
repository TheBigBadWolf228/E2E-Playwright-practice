import {BaseFragment, $element} from '../../../../lib';

class LoginFragment extends BaseFragment {
  email;
  password;
  submitLogin;
  constructor(page, rootFragmentSelector = '#email') {
    super(page, rootFragmentSelector);
    this.email = $element(this.page, '#email', 'Email field');
    this.password = $element(this.page, '#passwd', 'Password field');
    this.submitLogin = $element(this.page, '#SubmitLogin', 'Submit button');
  }

  async login(username, password) {
    await this.email.type(username);
    await this.password.type(password);
    await this.submitLogin.click();
  }
}

export {
  LoginFragment,
};
