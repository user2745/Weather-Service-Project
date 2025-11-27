import axios from 'axios'


class Controller {

    async getWeatherData({ lat, long }: { lat: string, long: string }): Promise<any> {
        let shortForecast: string, temperature: number;
        let wfo: string;
        // Get the wfo and grid X,Y from the lat/long endpoint
        const pointRes = await axios.get(`https://api.weather.gov/points/${lat},${long}`);
        wfo = pointRes.data.properties.gridId;
        const gridX = pointRes.data.properties.gridX;
        const gridY = pointRes.data.properties.gridY;

        // Get the forecast using wfo and grid X,Y
        const forecastRes = await axios.get(`https://api.weather.gov/gridpoints/${wfo}/${gridX},${gridY}/forecast`);
        shortForecast = forecastRes.data.properties.periods[0].shortForecast;
        temperature = forecastRes.data.properties.periods[0].temperature;

        // Map temperature to hot/cold/moderate
        let tempType = 'moderate';
        if (temperature > 80) tempType = 'hot';
        else if (temperature < 50) tempType = 'cold';

        return {
            'shortForecast': shortForecast,
            'temperature': temperature,
            'temperatureType': tempType
        };
    }
}

export default Controller;