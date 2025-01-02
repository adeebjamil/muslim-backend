const express = require('express');
const router = express.Router();
const { getPrayerTimes } = require('../controllers/prayerTimesController');

router.get('/prayer-times', getPrayerTimes);

module.exports = router;