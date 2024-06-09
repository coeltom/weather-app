// src/components/Weather.js
import React, { useEffect, useState } from 'react';
import { getWeatherByCoords } from '../api/weather';

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
        <div>
          <h2>Weather in</h2>
          <h1>{weatherData.name}</h1>
          <p>{Math.round(weatherData.main.temp)}°C</p>
          <p>{weatherData.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      }
    </div>
  );
};

export default Weather;
