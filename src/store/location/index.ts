import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface locationState {
  latitude: number;
  longitude: number;
  place: string;
  country: string;
  isSelectedByUser: boolean;
  error: string;
}
const initialState: locationState = {
  latitude: 53.895,
  longitude: 27.559,
  place: 'Minsk',
  country: 'Belarus',
  isSelectedByUser: false,
  error: '',
};

export interface setLocationPayload {
  lat?: number;
  lon?: number;
  place?: string;
  country?: string;
  error?: string;
}

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
