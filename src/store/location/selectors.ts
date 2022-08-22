export const selectCoordinates = (state: {
  location: { latitude: number; longitude: number };
}) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});

export const selectCountryAndPlace = (state: {
  location: {
    country: string;
    place: string;
    error: string;
  };
}) => {
  const { country, place, error } = state.location;
  return { country, place, error };
};
