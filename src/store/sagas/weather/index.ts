import {
  call,
  CallEffect,
  put,
  select,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherInfoTomorrowIo } from 'services/tomorrowIo';
import {
  setService,
  setWeather,
  setWeatherPayload,
  setServicePayload,
} from 'store/weather';
import { fetchWeatherInfoVisualCrossing } from 'services/visualCrossing';
import { selectWeatherService } from 'store/weather/selectors';

export function* handleWeather({
  payload: { lat, lon, service },
}: PayloadAction<{
  lat: number;
  lon: number;
  service: WeatherServices;
}>): Generator<
  | SelectEffect
  | CallEffect<DerivedDayData[]>
  | PutEffect<
      PayloadAction<setWeatherPayload> | PayloadAction<setServicePayload>
    >,
  void,
  DerivedDayData[] | string
> {
  try {
    const usedService = service || (yield select(selectWeatherService));
    switch (usedService) {
      case 'TomorrowIo': {
        const weatherInfo = yield call(fetchWeatherInfoTomorrowIo, lat, lon);
        yield put(
          setWeather({ weather: weatherInfo as DerivedDayData[], error: '' })
        );
        yield put(setService({ service: usedService }));
        break;
      }
      case 'VisualCrossing': {
        const weatherInfo = yield call(
          fetchWeatherInfoVisualCrossing,
          lat,
          lon
        );
        yield put(
          setWeather({ weather: weatherInfo as DerivedDayData[], error: '' })
        );
        yield put(setService({ service: usedService }));
        break;
      }
      default: {
        yield put(
          setWeather({
            error: 'Unsupported resource specified',
          })
        );
      }
    }
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
