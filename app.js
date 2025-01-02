const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const prayerTimesRoutes = require('./routes/prayerTimesRoutes');
const qiblaDirectionRoutes = require('./routes/qiblaDirectionRoutes');
const zakatCalculatorRoutes = require('./routes/zakatCalculatorRoutes');
const duasRoutes = require('./routes/duasRoutes');
const islamicCalendarRoutes = require('./routes/islamicCalendarRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', prayerTimesRoutes);
app.use('/api', qiblaDirectionRoutes);
app.use('/api', zakatCalculatorRoutes);
app.use('/api', duasRoutes);
app.use('/api', islamicCalendarRoutes);

module.exports = app;