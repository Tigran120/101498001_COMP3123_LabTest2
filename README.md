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
<img src="screenshots/Screenshot 2025-11-27 091849.png" alt="Toronto Weather" width="200"/>
Weather app showing Toronto with temperature, conditions, coordinates, humidity, pressure, and wind speed

### London Weather
<img src="screenshots/Screenshot 2025-11-27 091911.png" alt="London Weather" width="200"/>
Weather app showing London with city background image, temperature, and detailed weather information

### Error Handling
<img src="screenshots/Screenshot 2025-11-27 085005.png" alt="Error Handling" width="200"/>
Error message displayed when city is not found

### Postman API Test
<img src="screenshots/Screenshot 2025-11-27 085255.png" alt="Postman API Test" width="200"/>
Postman showing successful API response for Toronto weather data
