import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoConn');

const connectDB = async() => {

    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true

        });

        console.log("mongo db connected");
    } catch (err) {
        console.log("unable to connect to mongo", err);
        process.exit();
    }

}
module.exports = connectDB;