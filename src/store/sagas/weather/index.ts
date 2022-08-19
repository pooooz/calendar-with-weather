import { call, CallEffect, SelectEffect } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherInfo } from 'utils/index';

interface DayData {
  weekday: string;
  temperature: number;
  weatherCodeFullDay: number;
}
export function* handleWeather(
  action: PayloadAction<{ lat: number; lon: number }>
): Generator<SelectEffect | CallEffect<DayData[]>, void, DayData[]> {
  const weatherInfo = yield call(
    fetchWeatherInfo,
    action.payload.lat,
    action.payload.lon
  );
  console.log(weatherInfo);
}
