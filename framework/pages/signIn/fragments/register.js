const {wait} = require('../../../../lib');

class RegisterFragment {
  constructor(page) {
    this.page = page;
  }

  async register(newUserMail, firstName, lastName, password, address, city,
      postalCode, mobilePhone) {
    await this.page.fill('#email_create', newUserMail);
    await this.page.click('#SubmitCreate');
    await wait(this.page).waitVisibility('#id_gender1');
    await this.page.check('#id_gender1');
    await this.page.type('#customer_firstname', firstName);
    await this.page.type('#customer_lastname', lastName);
    await this.page.fill('#passwd', password);
    await this.page.fill('#address1', address);
    await this.page.fill('#city', city);
    await this.page.click('#uniform-id_state');
    await this.page.keyboard.down('ArrowDown');
    await this.page.keyboard.down('Enter');
    await this.page.fill('#postcode', postalCode);
    await this.page.fill('#phone_mobile', mobilePhone);
    await this.page.click('#submitAccount');
  }
}

module.exports = {
  RegisterFragment,
};
