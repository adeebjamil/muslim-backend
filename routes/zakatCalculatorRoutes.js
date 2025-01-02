const express = require('express');
const router = express.Router();
const { calculateZakat } = require('../controllers/zakatCalculatorController');

router.post('/zakat-calculator', calculateZakat);

module.exports = router;