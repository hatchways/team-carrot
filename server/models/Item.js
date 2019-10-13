import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const ItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'lists'
    },
    url: {
        type: String,
        required: true
    },
    pictureUrl: {
        type: String
    },
    name: {
        type: String
    },
    prices: {
        type: [{
            date: {
                type: Date,
                default: Date.now
            },
            value: Number
        }],
    }
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;