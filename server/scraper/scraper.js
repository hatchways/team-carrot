const puppeteer = require('puppeteer');
const browserPromise = require('./browser');
const getProductContent = (siteUrl) => {
    let promise = new Promise(async(resolve, reject) => {
        const browser = await browserPromise.getInstance();
        console.log("SCRAPING URL", siteUrl);
        const page = await browser.newPage();
        await page.goto(siteUrl);
        await page.waitFor(3000);
        const productTitle = await page.evaluate(() => {
            const ele = document.querySelector("#productTitle");
            if (!ele) {
                console.log(window.location.href, 'no name found');
                return '';
            }
            return ele.innerText;
        });
        let productPrice;
        let pictureURL = '';
        try {
            productPrice = await page.evaluate(() => {
                if (document.querySelector('#priceblock_dealprice') !== null) {
                    return document.querySelector('#priceblock_dealprice').innerText;
                } else if (document.querySelector('#priceblock_ourprice') !== null) {
                    return document.querySelector('#priceblock_ourprice').innerText;
                } else if (document.querySelector('#olp-new .a-color-price') != null) {
                    return document.querySelector('#olp-new .a-color-price').innerText;
                } else if (document.querySelector('#priceblock_saleprice') != null) {
                    return document.querySelector('#priceblock_saleprice').innerText;
                } else {
                    return '';
                }
            });

        } catch (err) {
            console.log(err);
        }
        try {
            pictureURL = await page.evaluate(() => {
                const ele = document.querySelector("#imgTagWrapperId img");
                if (!ele) {
                    console.log(window.location.href, 'no image found');
                    return '';
                }
                return ele.src;
            });;
        } catch (err) {
            console.log(err);
        }
        await page.close();
        // await browser.close();
        const product = {
            name: productTitle,
            prices: [{
                value: productPrice.replace(/^\D+/g, ''),
                date: new Date()
            }],
            pictureUrl: pictureURL
        };
        console.log(product);
        resolve(product);
    });
    return promise;
}


module.exports = {
    getProductContent: getProductContent
};