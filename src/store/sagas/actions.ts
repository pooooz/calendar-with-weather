const getLocationAndWeatherType = 'location/getLocationAndWeather';
export const getLocationAndWeather = (payload: {
  lat: number;
  lon: number;
}) => ({
  type: getLocationAndWeatherType,
  payload,
});
getLocationAndWeather.type = getLocationAndWeatherType;

const getLocationAndWeatherByPlaceType =
  'location/getLocationAndWeatherByPlace';
export const getLocationAndWeatherByPlace = (payload: { place: string }) => ({
  type: getLocationAndWeatherByPlaceType,
  payload,
});
getLocationAndWeatherByPlace.type = getLocationAndWeatherByPlaceType;

const getWeatherByCoordinatesType = 'location/getWeatherByCoordinates';
export const getWeatherByCoordinates = (payload: {
  lat: number;
  lon: number;
  service: keyof typeof WeatherServices;
}) => ({
  type: getWeatherByCoordinatesType,
  payload,
});
getWeatherByCoordinates.type = getWeatherByCoordinatesType;

const toggleServiceType = 'location/toggleService';
export const toggleService = (payload: {
  service: keyof typeof WeatherServices;
  latitude: number;
  longitude: number;
}) => ({
  type: toggleServiceType,
  payload,
});
toggleService.type = toggleServiceType;

const getEventsType = 'calendar/getEvents';
export const getEvents = () => ({
  type: getEventsType,
});
getEvents.type = getEventsType;
