const puppeteer = require('puppeteer');

module.exports = (function() {
    let browserPromise;

    return {
        getInstance: function() {
            if (browserPromise) {
                return browserPromise;
            }
            browserPromise = puppeteer.launch({
                headless: false
            });
            return browserPromise;
        }
    };
})();