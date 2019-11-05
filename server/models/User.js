import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    latest_notification: {
        type: Date
    },
    profilePictureUrl: {
        type: String
    }

})

const User = mongoose.model('user', UserSchema);

module.exports = User;