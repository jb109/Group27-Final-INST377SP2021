/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// ///////////////////////////////////
/// /////// Weather  Endpoints ////////
/// ///////////////////////////////////
router.get('/weather_p', async (req, res) => {
  try {
    const events = await db.WeatherPrimary.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    const event = await db.WeatherPrimary.findAll({
      where: {
        weather_primary_id: req.params.weather_primary_id,
      }
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/weather_p', async (req, res) => {
  const events = await db.WeatherPrimary.findAll();
  try {
    const newEvent = await db.WeatherPrimary.create({
      weather_primary_id_id: req.body.weather_primary_id,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      wind_speed: req.body.wind_speed,
      date: req.body.date,
      weather_secondary_id: req.body.weather_secondary_id,
      region_id: req.body.region_id,
      season_id: req.body.season_id,
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    await db.WeatherPrimary.destroy({
      where: {
        weather_primary_id: req.params.weather_primary_id,
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/weather_p', async (req, res) => {
  try {
    await db.WeatherPrimary.update(
      {
        weather_primary_id_id: req.body.weather_primary_id,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        wind_speed: req.body.wind_speed,
        date: req.body.date,
        weather_secondary_id: req.body.weather_secondary_id,
        region_id: req.body.region_id,
        season_id: req.body.season_id,
      },
      {
        where: {
          weather_primary_id: req.body.weather_primary_id,
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;