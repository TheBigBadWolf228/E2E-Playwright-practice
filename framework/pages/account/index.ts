import {decoratePage, BasePage, $element} from '../../../lib';

class AccountPage extends BasePage {
  page;
  header;
  constructor(page, pageRootSelector = '.info-account') {
    super(page, pageRootSelector);
    this.header = $element(this.page, '.page-heading');
  }

  async getMyAccountHeaderTitle() {
    return this.header.textContent();
  }
}

decoratePage(AccountPage);

export {
  AccountPage,
};
