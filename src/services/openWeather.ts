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

export interface LocationDataWithCoordinates {
  name: string;
  country: string;
  lat: string;
  lon: string;
}
export const fetchLocationCoordinates = async (
  place: string
): Promise<LocationDataWithCoordinates> => {
  const data = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${OPENWEATHER_API_KEY}`
  );
  if (!data.ok) {
    throw new Error(data.statusText);
  }
  const json = await data.json();
  if (!json.length) {
    throw new Error('Unable to recognize place');
  }
  return json[0];
};
