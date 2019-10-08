const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const getProductContent = (siteUrl) => {
    let promise = new Promise(async(resolve, reject) => {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = await browser.newPage();
        await page.goto(siteUrl);
        const html = await page.content();

        const productTitle = cheerio('#productTitle', html).text().trim();
        let productPrice;
        if (await page.$('#priceblock_dealprice') !== null) {
            productPrice = cheerio('#priceblock_dealprice', html).text();
        } else if (await page.$('#priceblock_ourprice') !== null) {
            productPrice = cheerio('#priceblock_ourprice', html).text();
        } else {
            console.log("cannot exists");
        }

        const pictureUrl = await page.evaluate('document.querySelector("#imgTagWrapperId img").getAttribute("src")');
        await browser.close();
        resolve({
            name: productTitle,
            prices: [{
                price: productPrice,
                date: new Date()
            }],
            url: pictureUrl
        });
    });
    return promise;
}


module.exports = {
    getProductContent: getProductContent
};