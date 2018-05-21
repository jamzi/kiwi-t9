const express = require("express");
const router = express.Router();

// define the home page route
router.get("/suggestions/:number", function(req, res) {
  const { number } = req.params;
  res.send("number: " + number);
});

module.exports = router;
