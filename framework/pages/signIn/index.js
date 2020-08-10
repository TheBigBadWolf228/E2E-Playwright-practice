
class SignInPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    // Should be refactored
    await this.page.fill('#email', username);
    await this.page.fill('#passwd', password);
    await this.page.click('#SubmitLogin');
  }
}

module.exports = {
  SignInPage,
};

