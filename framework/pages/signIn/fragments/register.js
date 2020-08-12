const {wait} = require('../../../../lib');
const {decoratePage} = require('../../../../lib');

class RegisterFragment {
  constructor(page, rootFragmentSelector = '#header') {
    this.page = page;
    this.rootSelector = rootFragmentSelector;
    decoratePage(RegisterFragment);
  }

  async email() {
    const elementHandler = await this.page.$('#email_create');
    return elementHandler;
  }

  async submit() {
    const elementHandler = await this.page.$('#SubmitCreate');
    return elementHandler;
  }

  async checkbox() {
    const elementHandler = await this.page.$('#id_gender1');
    return elementHandler;
  }

  async firstName() {
    const elementHandler = await this.page.$('#customer_firstname');
    return elementHandler;
  }

  async lastName() {
    const elementHandler = await this.page.$('#customer_lastname');
    return elementHandler;
  }

  async password() {
    const elementHandler = await this.page.$('#passwd');
    return elementHandler;
  }

  async address() {
    const elementHandler = await this.page.$('#address1');
    return elementHandler;
  }

  async city() {
    const elementHandler = await this.page.$('#city');
    return elementHandler;
  }

  async drop() {
    const elementHandler = await this.page.$('#uniform-id_state');
    return elementHandler;
  }

  async postCode() {
    const elementHandler = await this.page.$('#postcode');
    return elementHandler;
  }

  async mobilePhone() {
    const elementHandler = await this.page.$('#phone_mobile');
    return elementHandler;
  }

  async submitAccount() {
    const elementHandler = await this.page.$('#submitAccount');
    return elementHandler;
  }


  async register(newUserMail, firstName, lastName, password, address, city,
      postalCode, mobilePhone) {
    await (await this.email()).type(newUserMail);
    await (await this.submit()).click();
    await wait(this.page).waitVisibility('#id_gender1');
    await (await this.checkbox()).check();
    await (await this.firstName()).type(firstName);
    await (await this.lastName()).type(lastName);
    await (await this.password()).type(password);
    await (await this.address()).fill(address);
    await (await this.city()).fill(city);

    await this.page.click('#uniform-id_state');
    await this.page.keyboard.down('ArrowDown');
    await this.page.keyboard.down('Enter');

    await (await this.postCode()).type(postalCode);
    await (await this.mobilePhone()).type(mobilePhone);
    await (await this.submitAccount()).click();
  }
}

module.exports = {
  RegisterFragment,
};
