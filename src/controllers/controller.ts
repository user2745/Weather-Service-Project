import axios from 'axios'


const Controller = {

    getWeatherData({ lat, long }: { lat: string, long: string }): any {
        let shortForecast: string, temperature: string;
        let wfo: string;
        axios.get(`https://api.weather.gov/points/${lat},${long}`, (response) => {
            
        })


        axios.get(`https://api.weather.gov/gridpoints/${wfo}/63,62/forecast`, (data) => {

        })

        return {
            'shortForecast': shortForecast,
            'temperature': temperature,
        };
    }
}

export default Controller;