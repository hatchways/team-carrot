import express from 'express';
import Item from '../models/Item';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth';

const router = express.Router();

// creating Item 
router.post('/', [
        check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('prices.*.value', 'Price must be numeric')
        .isNumeric(),
        check('url', 'Please enter correct url')
        .isURL()
    ],
    auth, async(req, res) => {

        const result = validationResult(req);

        if (result.errors.length) {
            return res.status(400).json({ errors: result.errors })
        }

        try {
            const newItem = new Item({
                user: req.user.id,
                url: req.body.url,
                name: req.body.name,
                prices: req.body.prices
            });

            const item = await newItem.save();
            res.status(200).send(item);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    });

module.exports = router;