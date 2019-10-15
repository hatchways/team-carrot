import cron from "node-cron";
import Item from "../models/Item";
import scraper from "../scraper/scraper";
import notification from "../notification/notification";

const startCronJob = async () => {
  const cronJob = cron.schedule("*/3 * * * *", async () => {
    try {
      const items = await Item.find();
      console.log(items);
      items.forEach(async element => {
        let item = await scraper.getProductContent(element.url);
        let prices = element.prices;
        if (item.prices[0].value) {
          item.prices[0].value = item.prices[0].value.replace(/^\D+/g, "");
        }
        if (
          element.prices.length == 0 ||
          (item.prices[0].value &&
            element.prices[element.prices.length - 1].value !=
              item.prices[0].value)
        ) {
          prices.push(item.prices[0]);
          const result = await Item.updateOne(
            { _id: element._id },
            { prices: prices }
          );
          console.log(result);
          notification.createNotification(
            element._id,
            element.prices[element.prices.length - 2].value,
            element.prices[element.prices.length - 1].value
          );
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  });

  cronJob.start();
};

module.exports = {
  startCronJob: startCronJob
};
