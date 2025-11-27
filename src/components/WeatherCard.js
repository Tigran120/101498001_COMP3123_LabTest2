import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const temperature = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0]?.description || 'N/A';
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon || '01d'}@2x.png`;
  const condition = weatherData.weather[0]?.main || 'N/A';
  const lon = weatherData.coord?.lon;
  const lat = weatherData.coord?.lat;
  const humidity = weatherData.main?.humidity;
  const pressure = weatherData.main?.pressure;
  const windSpeed = weatherData.wind?.speed;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{weatherData.name}</h2>
        <img 
          src={iconUrl} 
          alt={description}
          className="weather-icon"
        />
      </div>

      <div className="temperature-section">
        <div className="main-temp">{temperature}°C</div>
      </div>

      <div className="weather-description">
        <p className="condition">{condition}</p>
        <p className="description">{description}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Coordinates</span>
          <span className="detail-value">{lat}°N, {lon}°E</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
