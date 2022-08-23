import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface locationState {
  latitude: number;
  longitude: number;
  place: string;
  country: string;
  error: string;
}
const initialState: locationState = {
  latitude: 53.895,
  longitude: 27.559,
  place: 'Minsk',
  country: 'Belarus',
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
    setLocation: (state, action: PayloadAction<setLocationPayload>) => {
      state.latitude = action.payload.lat || state.latitude;
      state.longitude = action.payload.lon || state.longitude;
      state.place = action.payload.place || state.place;
      state.country = action.payload.country || state.country;
      if (action.payload.error === '') {
        state.error = '';
      } else {
        state.error = action.payload.error || state.error;
      }
    },
  },
});

export const { setLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
