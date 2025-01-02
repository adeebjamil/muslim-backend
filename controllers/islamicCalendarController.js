const axios = require('axios');
require('dotenv').config();

exports.getIslamicCalendar = async (req, res) => {
  const response = await axios.get('https://api.aladhan.com/v1/gToHCalendar/2025-01-01/2025-12-31');
  res.json(response.data);
};