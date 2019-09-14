import express from "express";
const router = express.Router();

router.get("/home", (req, res) => {
  res.status(200).send({ message: "Welcome to the home route" });
});

module.exports = router;
