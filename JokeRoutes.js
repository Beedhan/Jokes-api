const express = require("express");
const router = express.Router();
const { yomamma, dadjoke, programming, dark, doland } = require("./controllers/controller");

router.get("/yomama", yomamma);

router.get("/dadjoke", dadjoke);

router.get("/programming", programming);

router.get("/dark", dark);

router.get("/doland", doland);

module.exports = router;
