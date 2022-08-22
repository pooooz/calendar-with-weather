import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface weatherState {
  weekInfo: Array<DerivedDayData>;
  error: string;
}
const initialState: weatherState = {
  weekInfo: [
    {
      weekday: 'Thu',
      temperature: 27,
      weatherCodeFullDay: 1001,
      description: 'Sunny',
    },
  ],
  error: '',
};

export interface setWeatherPayload {
  weather?: Array<DerivedDayData>;
  error?: string;
}
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<setWeatherPayload>) => {
      state.weekInfo = action.payload.weather || state.weekInfo;
      if (action.payload.error === '') {
        state.error = '';
      } else {
        state.error = action.payload.error || state.error;
      }
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
