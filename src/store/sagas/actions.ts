const getLocationType = 'location/getLocationAndWeather';
export const getLocation = (
  payload: { lat: number; lon: number } | { place: string }
) => ({
  type: getLocationType,
  payload,
});
getLocation.type = getLocationType;

const getEventsType = 'calendar/getEvents';
export const getEvents = () => ({
  type: getEventsType,
});
getEvents.type = getEventsType;
