const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const getProductContent = (siteUrl) => {
    let promise = new Promise(async(resolve, reject) => {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = await browser.newPage();
        await page.goto(siteUrl);
        try {
            const productTitle = await page.evaluate(() => 'document.querySelector("#productTitle").innerText');

        } catch (err) {
            console.log(err);
        }
        const productTitle = await page.evaluate(() => document.querySelector("#productTitle").innerText);
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
                return document.querySelector('#imgTagWrapperId img').src;
            });;
        } catch (err) {
            console.log(err);
        }

        await browser.close();
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