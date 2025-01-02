const axios = require('axios');
require('dotenv').config();

exports.getPrayerTimes = async (req, res) => {
  const { latitude, longitude } = req.query;
  const response = await axios.get(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`);
  res.json(response.data.data.timings);
};