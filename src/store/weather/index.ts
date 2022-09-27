import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  setServicePayload,
  setWeatherPayload,
  WeatherState,
} from './interfaces';

const initialState: WeatherState = {
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
