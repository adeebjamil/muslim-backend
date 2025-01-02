require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Mock data for prayer times, duas, Islamic calendar events, and Ramadan calendar events
const prayerTimesData = {
  timings: {
    Fajr: "05:30",
    Dhuhr: "12:00",
    Asr: "15:30",
    Maghrib: "18:00",
    Isha: "19:30"
  }
};

const duasData = [
  { text: "Dua 1" },
  { text: "Dua 2" },
  { text: "Dua 3" }
];

const islamicCalendarData = {
  events: [
    { name: "Event 1", date: "2025-01-01T00:00:00Z" },
    { name: "Event 2", date: "2025-01-15T00:00:00Z" }
  ]
};

const ramadanCalendarData = {
  events: [
    { name: "Ramadan Day 1", date: "2025-03-01T00:00:00Z" },
    { name: "Ramadan Day 2", date: "2025-03-02T00:00:00Z" },
    // Add more Ramadan days as needed
  ]
};

// Endpoints
app.get('/api/timings', async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API_BASE_URL}/timingsByCity`,
      {
        params: {
          city: req.query.city || process.env.DEFAULT_CITY,
          country: req.query.country || process.env.DEFAULT_COUNTRY,
          method: process.env.PRAYER_METHOD
        }
      }
    );
    res.json({ data: data.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prayer times' });
  }
});

app.get('/api/duas', (req, res) => {
  res.json({ data: duasData });
});

app.get('/api/islamic-calendar', async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API_BASE_URL}/hijriCalendarByCity`,
      {
        params: {
          city: req.query.city || process.env.DEFAULT_CITY,
          country: req.query.country || process.env.DEFAULT_COUNTRY,
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear()
        }
      }
    );
    res.json({ data: data.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Islamic calendar' });
  }
});

app.get('/api/ramadan-calendar', (req, res) => {
  res.json({ data: ramadanCalendarData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});