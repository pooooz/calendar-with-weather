import { RootState } from 'store/index';

export const selectWeatherInfo = (state: RootState) => state.weather;

export const selectTodayWeatherDescription = (state: RootState) =>
  state.weather.today;

export const selectRequestTimestamp = (state: RootState) =>
  state.weather.requestTimestamp;

export const selectWeatherService = (state: RootState) => state.weather.service;
