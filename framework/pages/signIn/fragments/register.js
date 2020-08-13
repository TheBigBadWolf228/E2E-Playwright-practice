const {wait} = require('../../../../lib');
const {decoratePage} = require('../../../../lib');

class RegisterFragment {
  constructor(page, rootFragmentSelector = '#header') {
    this.page = page;
    this.rootSelector = rootFragmentSelector;
  }

  get email() {
    return this.page.$('#email_create');
  }

  get submit() {
    return this.page.$('#SubmitCreate');
  }

  get checkbox() {
    return this.page.$('#id_gender1');
  }

  get firstName() {
    return this.page.$('#customer_firstname');
  }

  get lastName() {
    return this.page.$('#customer_lastname');
  }

  get password() {
    return this.page.$('#passwd');
  }

  get address() {
    return this.page.$('#address1');
  }

  get city() {
    return this.page.$('#city');
  }

  get postCode() {
    return this.page.$('#postcode');
  }

  get mobilePhone() {
    return this.page.$('#phone_mobile');
  }

  get submitAccount() {
    return this.page.$('#submitAccount');
  }


  async register(newUserMail, firstName, lastName, password, address, city,
      postalCode, mobilePhone) {
    await (await this.email).type(newUserMail);
    await (await this.submit).click();
    await wait(this.page).waitVisibility('#id_gender1');
    await (await this.checkbox).check();
    await (await this.firstName).type(firstName);
    await (await this.lastName).type(lastName);
    await (await this.password).type(password);
    await (await this.address).fill(address);
    await (await this.city).fill(city);
    await this.page.click('#uniform-id_state');
    await this.page.keyboard.down('ArrowDown');
    await this.page.keyboard.down('Enter');
    await (await this.postCode).type(postalCode);
    await (await this.mobilePhone).type(mobilePhone);
    await (await this.submitAccount).click();
  }
}

decoratePage(RegisterFragment);

module.exports = {
  RegisterFragment,
};
