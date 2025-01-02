const express = require('express');
const router = express.Router();
const { getDuas } = require('../controllers/duasController');

router.get('/duas', getDuas);

module.exports = router;