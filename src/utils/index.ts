import { OPENWEATHER_API_KEY } from '../constants';

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
