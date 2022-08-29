import { extractWeatherInfoVisualCrossing } from 'utils/index';
import { VISUALCROSSING_API_KEY } from '../constants';

export const fetchWeatherInfoVisualCrossing = async (
  lat: number,
  lon: number
) => {
  const options = {
    method: 'GET',
  };
  const params = 'unitGroup=metric&include=days';

  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/2022-08-29/2022-09-04?${params}&key=${VISUALCROSSING_API_KEY}`,
    options
  );

  if (!data.ok) {
    switch (data.status) {
      case 401: {
        throw new Error('Unable to recognize token');
      }
      case 429: {
        throw new Error('Too many requests');
      }
      default: {
        throw new Error('Unable to fetch data');
      }
    }
  }

  const WeatherInfo: WeatherDataVisualCrossing = await data.json();

  return extractWeatherInfoVisualCrossing(WeatherInfo);
};
