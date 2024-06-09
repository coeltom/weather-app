import axios from 'axios';

export const getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );
  return response.data;
};
