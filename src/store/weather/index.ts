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
    setWeather: (
      state,
      { payload: { error, weather } }: PayloadAction<setWeatherPayload>
    ) => {
      if (weather) {
        state.weekInfo = weather;
        state.today = weather[0].description;
      }
      if (error === '') {
        state.error = '';
      } else {
        state.error = error || state.error;
      }
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
