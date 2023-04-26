const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// memberga daxldor routerlar
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// bowqa routerlar
router.get("/menu", (req, res) => {
  res.send("menu sahifasidasiz");
});

router.get("/community", (req, res) => {
  res.send("jamiyat sahifasidasiz");
});

module.exports = router;
