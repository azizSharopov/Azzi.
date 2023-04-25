const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("home sahifasidasiz");
});

router.get("/menu", (req, res) => {
  res.send("menu sahifasidasiz");
});

router.get("/community", (req, res) => {
  res.send("jamiyat sahifasidasiz");
});

module.exports = router;
