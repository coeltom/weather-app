import React, { useEffect, useState } from 'react';
import { getWeatherByCoords } from '../api/weather';
import './wether.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        const data = await getWeatherByCoords(latitude, longitude);
        setWeatherData(data);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {
        <div className="weather-card">
          <h1 className="city">{weatherData.name}</h1>
          <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
          <p className="conditions">{weatherData.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
        </div>
      }
    </div>
  );
};

export default Weather;
