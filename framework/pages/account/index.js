const {wait} = require('../../../lib');
const {decoratePage, BasePage} = require('../../../lib');

class AccountPage extends BasePage {
  constructor(page, pageRootSelector = '#center_column') {
    super(page, pageRootSelector);
  }

  async getMyAccountHeaderTitle() {
    await wait(this.page).waitVisibility('.page-heading');
    const elementHandler = await this.page.$('.page-heading');
    return elementHandler.textContent();
  }
}

decoratePage(AccountPage);

module.exports = {
  AccountPage,
};
