import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationState, setLocationPayload } from './interface';

const initialState: LocationState = {
  latitude: 53.895,
  longitude: 27.559,
  place: 'Minsk',
  country: 'Belarus',
  isSelectedByUser: false,
  error: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (
      state,
      {
        payload: { lat, lon, place, country, error },
      }: PayloadAction<setLocationPayload>
    ) => {
      if (lat && lon && place && country) {
        state.latitude = lat;
        state.longitude = lon;
        state.place = place;
        state.country = country;
        state.isSelectedByUser = true;
      }

      if (error === '') {
        state.error = '';
      } else {
        state.error = error || state.error;
      }
    },
  },
});

export const { setLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
