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
        <div class="weather-card">
          <h1 class="city">{weatherData.name}</h1>
          <p class="temperature">{weatherData.main.temp}</p>
          <p class="conditions">{weatherData.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            class="weather-icon"
          />
        </div>
      }
    </div>
  );
};

export default Weather;
