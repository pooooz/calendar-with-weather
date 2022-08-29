import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface weatherState {
  service: keyof typeof WeatherServices;
  weekInfo: Array<DerivedDayData>;
  today: string;
  requestTimestamp: string;
  error: string;
}
const initialState: weatherState = {
  service: 'TomorrowIo',
  weekInfo: [
    {
      weekday: 'Tue',
      temperature: 27,
      weatherCodeDay: 10000,
      description: 'Clear, sunny',
    },
  ],
  today: 'Clear, sunny',
  requestTimestamp: new Date().toISOString(),
  error: '',
};

export interface setWeatherPayload {
  weather?: Array<DerivedDayData>;
  error?: string;
}
export interface setServicePayload {
  service: WeatherServices;
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
        state.requestTimestamp = new Date().toISOString();
      }
      if (error === '') {
        state.error = '';
      } else {
        state.error = error || state.error;
      }
    },
    setService: (
      state,
      { payload: { service } }: PayloadAction<setServicePayload>
    ) => {
      state.service = service;
    },
  },
});

export const { setWeather, setService } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
