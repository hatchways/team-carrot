import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const ListSchema = new Schema({
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

});

const List = mongoose.model('list', ListSchema);
module.exports = List;