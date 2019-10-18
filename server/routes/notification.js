import Notification from '../models/Notification';
import express from 'express';
import auth from '../middleware/auth';
import { check } from 'express-validator';

const router = express.Router();

router.get('/all', auth, async(req, res) => {
    try {
        if (!req.query.t) {
            console.log(req.query.t)
            const notifications = await Notification.find({
                user: req.user.id,
                dismissed: false
            });
            return res.json(notifications);
        } else {
            const notifications = await Notification.find({
                user: req.user.id,
                timestamp: { $gt: req.query.t }
            });
            if (notifications.length) {
                res.json(notifications);
            } else {
                res.status(304).json({ "msg": "Not modified" })
            }
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }

});


router.put('/dismiss', auth, [
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