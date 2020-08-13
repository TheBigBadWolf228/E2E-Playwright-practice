const {expect} = require('chai');
const {pageProvider} = require('../framework');
const {chromium} = require('playwright');


describe('Noop spec', function() {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  afterEach(async () => {
    await browser.close();
  });

  it('login', async function() {
    const signInPage = pageProvider(page).signIn();
    const accountPage = pageProvider(page).account();
    await signInPage.login('thebigbadwolf228@gmail.com', '~~~~~');
    expect(await accountPage.getMyAccountHeaderTitle()).to.equal('My account');
  });

  it('register', async function() {
    const signInPage = pageProvider(page).signIn();
    const accountPage = pageProvider(page).account();
    await signInPage.register('dos@wqqwef.com', 'ddo', 'last', '~~~~~',
        'address', 'city', '00000', '+3809568452');
    expect(await accountPage.getMyAccountHeaderTitle()).to.equal('My account');
  });
});
