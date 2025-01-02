const express = require('express');
const router = express.Router();
const { getIslamicCalendar } = require('../controllers/islamicCalendarController');

router.get('/islamic-calendar', getIslamicCalendar);

module.exports = router;