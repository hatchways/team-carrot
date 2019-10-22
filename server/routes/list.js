import express from 'express';
import auth from '../middleware/auth';
import aws from 'aws-sdk';
import Busboy from 'busboy';
import List from '../models/List';

const router = express.Router();

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.BUCKET_NAME
});


router.post('/', auth, (req, res, next) => {

    const file = req.files.cover;
    console.log(file);
    const params = {
        Bucket: process.env.BUCKET_NAME, // pass your bucket name
        Key: req.body.name,
        ContentType: file.mimetype,
        ACL: 'public-read',
        Body: file.data
    };
    s3.upload(params, function(s3Err, data) {
        if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`);

        try {
            const newList = new List({
                user: req.user.id,
                url: data.Location,
                name: req.body.name
            });

            const list = newList.save().then((list) => {
                res.status(200).send(list);
                console.log("image saved in database")
            })


        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }

    });
});


router.get('/', auth, async(req, res, next) => {
    try {
        const lists = await List.find({
            user: req.user.id
        });
        res.json(lists);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});


router.delete('/', auth, async(req, res) => {

    try {
        await List.findByIdAndRemove({ user: req.user.id, _id: req.body.id });
        res.json({ msg: 'List deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})



module.exports = router