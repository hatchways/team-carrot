import cron from 'node-cron';
import Item from '../models/Item';
import auth from '../middleware/auth';
import scraper from '../scraper/scraper';
//impo

const startCronJob = async() => {
    const cronJob = cron.schedule('*/30 * * * * *', async() => {
        try {
            const items = await Item
                .find();
            console.log(items);
            items.forEach(async(element) => {
                let item = await scraper.getProductContent(element.url);
                let prices = element.prices;
                if (item.prices[0].value) {
                    item.prices[0].value = item.prices[0].value.replace(/^\D+/g, '');
                }
                if (element.prices.length == 0 || (item.prices[0].value && element.prices[element.prices.length - 1].value != item.prices[0].value)) {
                    prices.push(item.prices[0]);
                    const result = await Item.updateOne({ _id: element._id }, { prices: prices });
                    console.log(result);
                }
            });

        } catch (err) {
            console.log(err.message);
        }

    });

    cronJob.start();
}




module.exports = {
    startCronJob: startCronJob
}