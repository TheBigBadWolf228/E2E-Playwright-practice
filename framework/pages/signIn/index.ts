
import {LoginFragment} from './fragments/login';
import {RegisterFragment} from './fragments/register';
import {decoratePage, BasePage} from '../../../lib';

class SignInPage extends BasePage {
  loginFragment;
  registerFragment;
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

export {
  SignInPage,
};

