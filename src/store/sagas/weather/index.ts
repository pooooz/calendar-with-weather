import {
  call,
  CallEffect,
  put,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherInfo } from 'utils/index';
import { setWeather, setWeatherPayload } from 'store/weather';

export function* handleWeather(
  action: PayloadAction<{ lat: number; lon: number }>
): Generator<
  | SelectEffect
  | CallEffect<DerivedDayData[]>
  | PutEffect<PayloadAction<setWeatherPayload>>,
  void,
  DerivedDayData[]
> {
  try {
    const weatherInfo = yield call(
      fetchWeatherInfo,
      action.payload.lat,
      action.payload.lon
    );
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
