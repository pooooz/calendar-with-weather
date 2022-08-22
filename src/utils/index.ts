import { selectWeatherInfo } from 'utils/helpers';
import { OPENWEATHER_API_KEY, TOMORROWIO_API_KEY } from '../constants';

export const getCurrentGeolocation = (
  callback: (pos: GeolocationPosition) => void
) => {
  const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const onError: PositionErrorCallback = (err) => {
    throw new Error(`ERROR(${err.code}): ${err.message}`);
  };
  navigator.geolocation.getCurrentPosition(callback, onError, options);
};

export interface LocationData {
  name: string;
  country: string;
}
export const fetchLocationName = async (
  lat: number,
  lon: number
): Promise<LocationData> => {
  const data = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${OPENWEATHER_API_KEY}`
  );
  if (!data.ok) {
    throw new Error(data.statusText);
  }
  const json = await data.json();
  return json[0];
};

export const fetchWeatherInfo = async (lat: number, lon: number) => {
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' },
  };
  const fields = 'fields=temperature&fields=weatherCodeDay';

  const data = await fetch(
    `https://api.tomorrow.io/v4/timelines?location=${lat}%2C%20${lon}&${fields}&units=metric&timesteps=1d&startTime=now&endTime=nowPlus6d&apikey=${TOMORROWIO_API_KEY}`,
    options
  );

  if (!data.ok) {
    switch (data.status) {
      case 401: {
        throw new Error('Unable to recognize token');
      }
      default: {
        throw new Error('Unable to fetch data');
      }
    }
  }

  const weatherInfo: WeatherData = await data.json();
  return selectWeatherInfo(weatherInfo);
};
