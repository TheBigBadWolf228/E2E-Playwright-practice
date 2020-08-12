class AccountPage {
  constructor(page) {
    this.page = page;
  }

  async getMyAccountHeaderTitle() {
    await this.page.waitForSelector('.page-heading', {state: 'visible'});
    const elementHandler = await this.page.$('.page-heading');
    return elementHandler.textContent();
  }
}

module.exports = {
  AccountPage,
};
