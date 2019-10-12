import express from 'express';
import mongoose from 'mongoose';
import Item from '../models/Item';
import List from '../models/List';
import { check, validationResult, body, param } from 'express-validator';
import auth from '../middleware/auth';
import scraper from '../scraper/scraper'
import notification from '../notification/notification';
import Notification from '../models/Notification';

const router = express.Router();

// creating Item 
router.post('/scrapeItem', auth, [
        check('url', 'Please enter correct url')
        .isURL()
    ],
    async(req, res) => {
        try {
            scraper.getProductContent(req.body.url)
                .then((product) => {
                    res.status(200).send({...product, url: req.body.url });
                });

        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    }
);

router.post('/storeItem', auth, [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('list_name', 'List Name is required')
    .not()
    .isEmpty(),
    body('list_name')
    .custom(async(value, { req }) => {
        const userId = mongoose.Types.ObjectId(req.user.id);
        const list = await List.findOne({
            user: userId,
            name: value
        });
        if (!list) throw new Error('Invalid List');

        req.list = list;
        return true;
    }),
], async(req, res) => {


    const result = validationResult(req);

    if (result.errors.length) {
        return res.status(400).json({ errors: result.errors })
    }


    try {
        const newItem = new Item({
            user: req.user.id,
            url: req.body.url,
            pictureUrl: req.body.pictureUrl,
            list: req.list.id,
            name: req.body.name,
            prices: req.body.prices
        });



        const item = await newItem.save();
        res.status(200).send({
            msg: "item has been added to the list"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});


router.get('/:name', auth, [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    param('name')
    .custom(async(value, { req }) => {
        const userId = mongoose.Types.ObjectId(req.user.id);
        const list = await List.findOne({
            user: userId,
            name: value
        });
        if (!list) throw new Error('Invalid List');

        req.list = list;
        return true;
    })
], async(req, res, next) => {
    const result = validationResult(req);

    if (result.errors.length) {
        return res.status(400).json({ errors: result.errors })
    }

    try {
        const items = await Item.find({
            user: req.user.id,
            list: req.list._id
        });
        res.json(items);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;