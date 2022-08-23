import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface weatherState {
  weekInfo: Array<DerivedDayData>;
  today: string;
  error: string;
}
const initialState: weatherState = {
  weekInfo: [
    {
      weekday: 'Tue',
      temperature: 27,
      weatherCodeDay: 10000,
      description: 'Clear, sunny',
    },
  ],
  today: 'Clear, sunny',
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
      if (action.payload.weather) {
        state.weekInfo = action.payload.weather;
        state.today = action.payload.weather[0].description;
      }
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
