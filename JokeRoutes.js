const express = require("express");
const router = express.Router();
const { yomamma, postJoke, dadjoke, programming, dark, doland, test } = require("./controllers/controller");

router.route('/yomama').get(yomamma)

router.route('/dadjoke').get(dadjoke);

router.route('/programming').get(programming);

router.route('/dark').get(dark);

router.route('/doland').get(doland);

//router.route('/submit').post(postJoke);
//router.route('/test').get(test);

module.exports = router;
