import {expect} from 'assertior';
import {pageProvider, provider} from '../framework';
import * as randomEmail from 'random-email';


describe('Noop spec', function() {
  let page = null;

  beforeEach(async () => {
    page = await provider.browser.init();
    await provider.browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account'); 
  });

  afterEach(async () => {
   await provider.browser.close();
  });

  it('login', async function() {
    const signInPage = pageProvider(page).signIn();
    const accountPage = pageProvider(page).account();
    await signInPage.login('thebigbadwolf228@gmail.com', '~~~~~');
    expect(await accountPage.getMyAccountHeaderTitle(), 'Header should be correct after login').toEqual('My account');
  });

  it('register', async function() {
    const signInPage = pageProvider(page).signIn();
    const accountPage = pageProvider(page).account();
    await signInPage.register(randomEmail(), 'ddo', 'last', '~~~~~',
        'address', 'city', '00000', '+3809568452');
    expect(await accountPage.getMyAccountHeaderTitle(), 'Header should be correct after register').toEqual('My account');
  });
});
