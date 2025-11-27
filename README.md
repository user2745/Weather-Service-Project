# Weather Service Project

A simple HTTP server that provides weather forecasts using the National Weather Service API.

## Features

- Accepts latitude and longitude coordinates
- Returns the short forecast for today (e.g., "Partly Cloudy")
- Returns the current temperature
- Categorizes temperature as "hot" (>80°F), "cold" (<50°F), or "moderate"
- Uses the National Weather Service API as the data source

## Setup

Install dependencies:
```bash
yarn install
```

## Running the Server

Start the development server:
```bash
yarn start
```

The server will run on `http://localhost:3000` (or the port specified in `PORT` environment variable).

## API Usage

### Endpoint

```
GET /?lat=<latitude>&lon=<longitude>
```

### Example Request

```bash
curl "http://localhost:3000/?lat=39.7456&lon=-97.0892"
```

### Example Response

```json
{
  "shortForecast": "Partly Cloudy",
  "temperature": 72,
  "temperatureType": "moderate"
}
```

## Testing

Run the test suite:
```bash
yarn test
```

## Building

Compile TypeScript to JavaScript:
```bash
yarn build
```

Output will be in the `dist/` directory.

## Project Structure

```
src/
  app.ts              # Express app configuration
  routes/
    routes.ts         # API route handlers
  controllers/
    controller.ts     # Weather data fetching logic
index.ts              # Server entry point
```
