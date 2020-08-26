import {expect} from 'assertior';
import {pageProvider} from '../framework';
import {chromium} from 'playwright';
import * as randomEmail from 'random-email';


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
    expect(await accountPage.getMyAccountHeaderTitle()).toEqual('My account');
  });

  it('register', async function() {
    const signInPage = pageProvider(page).signIn();
    const accountPage = pageProvider(page).account();
    await signInPage.register(randomEmail(), 'ddo', 'last', '~~~~~',
        'address', 'city', '00000', '+3809568452');
    expect(await accountPage.getMyAccountHeaderTitle()).toEqual('My account');
  });
});
