const {decoratePage, BasePage, $element} = require('../../../lib');

class AccountPage extends BasePage {
  constructor(page, pageRootSelector = '.info-account') {
    super(page, pageRootSelector);
    this.header = $element(this.page, '.page-heading');
  }

  async getMyAccountHeaderTitle() {
    return this.header.textContent();
  }
}

decoratePage(AccountPage);

module.exports = {
  AccountPage,
};
