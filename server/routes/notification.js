import Notification from '../models/Notification';
import express from 'express';
import auth from '../middleware/auth';

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

module.exports = router;