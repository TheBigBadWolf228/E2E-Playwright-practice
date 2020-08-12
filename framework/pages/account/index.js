const {wait} = require('../../../lib');

class AccountPage {
  constructor(page) {
    this.page = page;
  }

  async getMyAccountHeaderTitle() {
    await wait(this.page).waitVisibility('.page-heading');
    const elementHandler = await this.page.$('.page-heading');
    return elementHandler.textContent();
  }
}

module.exports = {
  AccountPage,
};
