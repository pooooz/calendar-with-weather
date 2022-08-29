const getLocationType = 'location/getLocationAndWeather';
export const getLocationAndWeather = (
  payload: { lat: number; lon: number } | { place: string }
) => ({
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

const getEventsType = 'calendar/getEvents';
export const getEvents = () => ({
  type: getEventsType,
});
getEvents.type = getEventsType;
