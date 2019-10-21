const puppeteer = require('puppeteer');

const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"'
];

const options = {
    args,
    headless: true,
    ignoreHTTPSErrors: true,
    userDataDir: './tmp'
};


module.exports = (function() {
    let browserPromise;

    return {
        getInstance: function() {
            if (browserPromise) {
                return browserPromise;
            }
            browserPromise = puppeteer.launch(options);
            return browserPromise;
        }
    };
})();