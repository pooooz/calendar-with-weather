export const getLocation = (payload: { lat: number; lon: number }) => ({
  type: 'location/getLocation',
  payload,
});
getLocation.type = 'location/getLocation';
