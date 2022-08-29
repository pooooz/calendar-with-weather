import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherInfo } from 'services/tomorrowIo';
import { setWeather, setWeatherPayload } from 'store/weather';

export function* handleWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>): Generator<
  | SelectEffect
  | CallEffect<DerivedDayData[]>
  | PutEffect<PayloadAction<setWeatherPayload>>,
  void,
  DerivedDayData[]
> {
  try {
    const weatherInfo = yield call(fetchWeatherInfo, lat, lon);
    yield put(setWeather({ weather: weatherInfo, error: '' }));
  } catch (error) {
    console.error(error);
    console.error('Unable to fetch data');
    if (error instanceof Error) {
      yield put(
        setWeather({
          error: error.message,
        })
      );
    }
  }
}
