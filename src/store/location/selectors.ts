import { RootState } from 'store/index';

export const selectCoordinates = (state: RootState) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});

export const selectIsSelectedByUser = (state: RootState) =>
  state.location.isSelectedByUser;

export const selectCountryAndPlace = (state: RootState) => state.location;
