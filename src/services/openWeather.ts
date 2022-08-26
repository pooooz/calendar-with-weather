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
