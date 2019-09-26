var express = require("express");
var router = express.Router();

router.get("/welcome", function(req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.post("/test", function(req, res) {
  const data = req.body;
  console.log(data);
  res.status(200).send(data);
});

module.exports = router;
