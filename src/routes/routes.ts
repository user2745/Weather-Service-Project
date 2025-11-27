
import express from 'express'
import Controller from '../controllers/controller';
const router = express.Router();


router.get('/', async (req, res) => {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
        return res.status(200).json({ status: 'Welcome to the Weather API' });
    }
    const controller = new Controller();
    try {
        const weatherData = await controller.getWeatherData({ lat: lat as string, long: lon as string });
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

export default router