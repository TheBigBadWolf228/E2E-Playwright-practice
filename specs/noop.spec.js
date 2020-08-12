const {expect} = require('chai');
const {SignInPage, AccountPage} = require('../framework');
const {chromium} = require('playwright');


describe('Noop spec', function() {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext({viewport: null});
    page = await context.newPage();
    await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  afterEach(async () => {
    await browser.close();
  });

  it('login', async function() {
    const signInPage = new SignInPage(page);
    const accountPage = new AccountPage(page);
    await signInPage.login('thebigbadwolf228@gmail.com', '~~~~~');
    expect(await accountPage.getMyAccountHeaderTitle()).to.equal('My account');
  });

  it('register', async function() {
    const signInPage = new SignInPage(page);
    const accountPage = new AccountPage(page);
    await signInPage.register('cos@sqqwef.com', 'ddo', 'last', '~~~~~',
        'address', 'city', '00000', '+3809568452');
    expect(await accountPage.getMyAccountHeaderTitle()).to.equal('My account');
  });
});
