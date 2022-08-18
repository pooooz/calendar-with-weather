import { RootState } from 'store/index';

export const selectCoordinates = (state: RootState) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});
