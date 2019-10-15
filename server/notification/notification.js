import Notification from '../models/Notification';
import Item from '../models/Item';


const createNotification = async(itemId, previousPrice, newPrice) => {

    const item = await Item.findOne({
        _id: itemId
    });

    try {
        const newNotification = new Notification({
            user: item.user,
            item: item.id,
            itemName: item.name,
            previousPrice: previousPrice,
            newPrice: newPrice
        })

        const notification = await newNotification.save();
        console.log("notification saved in database");

    } catch (err) {
        console.log(err);
    }

};

module.exports = {
    createNotification: createNotification
}