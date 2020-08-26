import {BaseFragment, $element} from '../../../../lib';

class RegisterFragment extends BaseFragment {
  email;
  submit;
  checkbox;
  firstName;
  lastName;
  password;
  address;
  city;
  postCode;
  mobilePhone;
  submitAccount;
  private id: string;
  constructor(page, rootFragmentSelector = '#header') {
    super(page, rootFragmentSelector);
    this.id = 'Register fragment';
    this.email = $element(this.page, '#email_create', 'Create email field');
    this.submit = $element(this.page, '#SubmitCreate', 'Submit creation button');
    this.checkbox = $element(this.page, '#id_gender1', 'Gender checkbox');
    this.firstName = $element(this.page, '#customer_firstname', 'Firstname field');
    this.lastName = $element(this.page, '#customer_lastname', 'Lastname field');
    this.password = $element(this.page, '#passwd', 'Password field');
    this.address = $element(this.page, '#address1', 'Address field');
    this.city = $element(this.page, '#city', 'City field');
    this.postCode = $element(this.page, '#postcode', 'Postcode field');
    this.mobilePhone = $element(this.page, '#phone_mobile', 'Mobil phone field');
    this.submitAccount = $element(this.page, '#submitAccount', 'Create account button');
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

export {
  RegisterFragment,
};
