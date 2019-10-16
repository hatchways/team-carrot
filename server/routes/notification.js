import Notification from '../models/Notification';
import express from 'express';
import auth from '../middleware/auth';
import { check } from 'express-validator';

const router = express.Router();

router.get('/', auth, async(req, res) => {
    try {
        const notifications = await Notification.find({
            user: req.user.id,
        });
        res.json(notifications);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }

});


router.post('/dismiss', auth, [
        check('id', 'id is required')
        .not()
        .isEmpty()
    ],
    async(req, res) => {
        try {
            const notification = await Notification.findOne({
                user: req.user.id,
                _id: req.body.id
            });

            notification.dismissed = true;

            const saved = await notification.save();
            res.json({ success: true, "msg": "notification read" });
        } catch (err) {
            res.json({ success: false, "msg": "failed to acknowledge" });
            console.log(err)
        }

    });


module.exports = router;