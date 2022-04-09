const express = require('express');
const router = express.Router();
const weatherController = require("../controllers/weather.controller");
const jwt = require('../libs/jwt.libs')

router.get("/getWeather", jwt.authToken, weatherController.getWheather);

module.exports = router;