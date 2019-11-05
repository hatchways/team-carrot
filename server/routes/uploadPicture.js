import express from 'express';
import auth from '../middleware/auth';
import aws from 'aws-sdk';
import User from '../models/User';

const router = express.Router();

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.BUCKET_NAME
});


router.post('/', auth, (req, res) => {

    const file = req.files.picture;
    console.log(file);
    const params = {
        Bucket: process.env.BUCKET_NAME, // pass your bucket name
        Key: req.user.name,
        ContentType: file.mimetype,
        ACL: 'public-read',
        Body: file.data
    };
    s3.upload(params, function(s3Err, data) {
        try {
            User.findByIdAndUpdate(req.user.id, {
                profilePictureUrl: data.Location
            }, { new: true }).then(() => {
                res.json({
                    msg: 'Successfully updated',
                    success: true
                });
            })

        } catch (err) {
            console.log(err.message);
            res.status(500).send({
                msg: 'Failed to update',
                success: false
            });
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

module.exports = router;