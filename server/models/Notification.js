import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'items'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    itemName: {
        type: String
    },
    previousPrice: {
        type: Number
    },
    newPrice: {
        type: Number
    }
})

const Notification = mongoose.model('notification', NotificationSchema);
module.exports = Notification;