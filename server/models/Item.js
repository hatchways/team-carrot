import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const ItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prices: {
        type: [{
            date: {
                type: Date,
                default: Date.now
            },
            value: Number
        }],
        required: true
    }
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;