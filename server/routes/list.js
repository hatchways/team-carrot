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
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', function() {
        console.log('Upload finished');

        const file = req.files.cover;
        console.log(file);
        s3.createBucket(function() {
            const params = {
                Bucket: process.env.BUCKET_NAME, // pass your bucket name
                Key: file.name, // file will be saved as testBucket/contacts.csv
                Body: JSON.stringify(file, null, 2)
            };
            s3.upload(params, function(s3Err, data) {
                if (s3Err) throw s3Err
                console.log(`File uploaded successfully at ${data.Location}`)

                const url = s3.getSignedUrl('getObject', {
                    Bucket: process.env.BUCKET_NAME,
                    Key: file.name
                })


                try {
                    const newList = new List({
                        user: req.user.id,
                        url: url,
                        name: file.name
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


        })



    });
    req.pipe(busboy);
});


router.get('/', auth, async(req, res, next) => {
    try {
        const lists = await List.find({
            user: req.user.id,
        });
        res.json(lists);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});
module.exports = router