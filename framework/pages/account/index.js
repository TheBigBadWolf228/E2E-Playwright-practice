const {decoratePage, BasePage, $element} = require('../../../lib');

class AccountPage extends BasePage {
  constructor(page, pageRootSelector = '#center_column') {
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
