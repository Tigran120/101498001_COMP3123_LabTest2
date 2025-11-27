#ID:101498001 
#Name: Tigran Khachaturyan
# Weather App

A React app that shows weather for any city using OpenWeatherMap API.

## Setup

1. Install: `npm install`
2. Get API key from https://openweathermap.org/api
3. Create `.env` file: `REACT_APP_WEATHER_API_KEY=your_key_here`
4. Run: `npm start`

## API Used

OpenWeatherMap - https://api.openweathermap.org/data/2.5/weather

## React Features

- useState for weather data and search input
- useEffect to fetch data on load
- Props passed to WeatherCard and SearchBar components

## Screenshots

### Toronto Weather
![Toronto Weather](screenshots/toronto-weather.png)
Weather app showing Toronto with temperature, conditions, coordinates, humidity, pressure, and wind speed

### London Weather
![London Weather](screenshots/london-weather.png)
Weather app showing London with city background image, temperature, and detailed weather information

### Error Handling
![Error Handling](screenshots/error-handling.png)
Error message displayed when city is not found

### Postman API Test
![Postman API Test](screenshots/postman-api-test.png)
Postman showing successful API response for Toronto weather data
