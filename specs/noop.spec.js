const {chromium} = require('playwright');

describe('Noop spec', function() {
  it('noop it', async function() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({path: `example.png`});
    await browser.close();
  });
});
