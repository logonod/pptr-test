const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const device = {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
        viewport: {
            width: 1366,
            height: 768
        }
    };
    await page.emulate(device);
    await page.goto('https://www.whatsmyua.info/');
    await page.screenshot({
        path: 'example.png'
    });

    await browser.close();
})();
