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
    itemUrl: {
        type: String
    },
    imageUrl: {
        type: String
    },
    previousPrice: {
        type: Number
    },
    newPrice: {
        type: Number
    },
    dismissed: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Number
    }
})


const Notification = mongoose.model('notification', NotificationSchema);
module.exports = Notification;