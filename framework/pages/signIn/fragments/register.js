const {decoratePage, BaseFragment, $element} = require('../../../../lib');

class RegisterFragment extends BaseFragment {
  constructor(page, rootFragmentSelector = '#header') {
    super(page, rootFragmentSelector);
    this.email = $element(this.page, '#email_create');
    this.submit = $element(this.page, '#SubmitCreate');
    this.checkbox = $element(this.page, '#id_gender1');
    this.firstName = $element(this.page, '#customer_firstname');
    this.lastName = $element(this.page, '#customer_lastname');
    this.password = $element(this.page, '#passwd');
    this.address = $element(this.page, '#address1');
    this.city = $element(this.page, '#city');
    this.postCode = $element(this.page, '#postcode');
    this.mobilePhone = $element(this.page, '#phone_mobile');
    this.submitAccount = $element(this.page, '#submitAccount');
  }


  async register(newUserMail, firstName, lastName, password, address, city,
      postalCode, mobilePhone) {
    await this.email.type(newUserMail);
    await this.submit.click();
    await this.checkbox.check();
    await this.firstName.type(firstName);
    await this.lastName.type(lastName);
    await this.password.type(password);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.page.click('#uniform-id_state');
    await this.page.keyboard.down('ArrowDown');
    await this.page.keyboard.down('Enter');
    await this.postCode.type(postalCode);
    await this.mobilePhone.type(mobilePhone);
    await this.submitAccount.click();
  }
}

decoratePage(RegisterFragment);

module.exports = {
  RegisterFragment,
};
