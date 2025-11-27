import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const cityBackgrounds = {
  'toronto': 'https://images.unsplash.com/photo-1531572753322-ad063163ccd9?w=1920&q=80',
  'london': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
  'new york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80',
  'paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
  'tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
  'sydney': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  'dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
  'mumbai': 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1920&q=80',
  'default': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80'
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Toronto');

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '54789e215dd1bb0c22a0ec7f3d89b9eb';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    const cityName = weatherData ? weatherData.name.toLowerCase() : 'toronto';
    const bg = cityBackgrounds[cityName] || cityBackgrounds['default'];
    
    const img = new Image();
    img.onload = () => {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
    };
    img.src = bg;
  }, [weatherData]);

  useEffect(() => {
    const bg = cityBackgrounds['toronto'];
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message || 'City not found'}`);
      } else {
        setError('Error: Unable to connect to the weather service');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityName) => {
    if (cityName.trim()) {
      setCity(cityName);
      fetchWeatherData(cityName);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Weather App</h1>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>{error}</p>
          </div>
        )}

        {weatherData && !loading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
