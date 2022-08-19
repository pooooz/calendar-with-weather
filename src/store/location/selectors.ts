export const selectCoordinates = (state: {
  location: { latitude: number; longitude: number };
}) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});
