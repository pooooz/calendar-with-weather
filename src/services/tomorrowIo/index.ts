import { TOMORROWIO_API_KEY } from 'constants/index';

import { extractWeatherInfoTomorrowIo } from 'utils/index';

export const fetchWeatherInfoTomorrowIo = async (lat: number, lon: number) => {
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' },
  };
  const fields = 'fields=temperature&fields=weatherCodeDay';

  const data = await fetch(
    `https://api.tomorrow.io/v4/timelines?location=${lat}%2C%20${lon}&${fields}&units=metric&` +
      `timesteps=1d&startTime=now&endTime=nowPlus6d&apikey=${TOMORROWIO_API_KEY}`,
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

  const weatherInfo: WeatherDataTomorrowIo = await data.json();
  return extractWeatherInfoTomorrowIo(weatherInfo);
};
