const {SignInPage} = require('../framework');
const {chromium} = require('playwright');


describe('Noop spec', function() {
  let browser = null;
  before(async () => {
    browser = await chromium.launch({headless: false});
  });

  after(async () => {
    await browser.close();
  });

  it('noop it', async function() {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    const signInPage = new SignInPage(page);
    await signInPage.login('thebigbadwolf228@gmail.com', '~~~~~');
    await page.screenshot({path: `example.png`});
  });
});
