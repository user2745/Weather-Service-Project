
import express from 'express'
import Controller from 'src/controllers/controller';
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getWeatherData(req.body);
}

)

export default router