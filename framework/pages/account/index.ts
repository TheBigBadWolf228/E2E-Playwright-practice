import {BasePage, $element} from '../../../lib';

class AccountPage extends BasePage {
  page;
  header;
  constructor(page, pageRootSelector = '.info-account') {
    super(page, pageRootSelector);
    this.header = $element(this.page, '.page-heading', 'Account header');
  }

  async getMyAccountHeaderTitle() {
    return this.header.textContent();
  }
}

export {
  AccountPage,
};
