const getLocationType = 'location/getLocationAndWeather';
export const getLocationAndWeather = (payload: {
  lat: number;
  lon: number;
}) => ({
  type: getLocationType,
  payload,
});
getLocationAndWeather.type = getLocationType;

const getLocationAndWeatherByPlaceType =
  'location/getLocationAndWeatherByPlace';
export const getLocationAndWeatherByPlace = (payload: { place: string }) => ({
  type: getLocationAndWeatherByPlaceType,
  payload,
});
getLocationAndWeatherByPlace.type = getLocationAndWeatherByPlaceType;

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
