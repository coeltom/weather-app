import axios from 'axios';

export const getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05a6793129d572e1ec8334b5653f1bd9&units=metric`
  );
  return response.data;
};
