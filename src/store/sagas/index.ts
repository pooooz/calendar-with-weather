import * as Effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  getEvents,
  getLocationAndWeather,
  getLocationAndWeatherByPlace,
} from 'store/sagas/actions';

import { handleLocation } from 'store/sagas/location';
import { handleWeather } from 'store/sagas/weather';
import { handleEvents } from 'store/sagas/calendar';
import {
  fetchLocationCoordinates,
  LocationDataWithCoordinates,
} from 'services/openWeather';
import { CallEffect, put, PutEffect } from 'redux-saga/effects';
import { setLocation } from 'store/location';

// ;)
const fork: any = Effects.fork;
const call: any = Effects.call;
const takeLatest: any = Effects.takeLatest;

function* handleLocationAndWeatherByCoordinates(
  action: PayloadAction<{ lat: number; lon: number }>
): Generator<
  CallEffect<LocationDataWithCoordinates> | PutEffect,
  void,
  LocationDataWithCoordinates
> {
  yield call(handleLocation, action);
  yield fork(handleWeather, action);
}

function* handleLocationAndWeatherByPlace({
  payload: { place },
}: PayloadAction<{ place: string }>) {
  try {
    const { lat, lon, name, country } = yield call(
      fetchLocationCoordinates,
      place
    );
    yield call(handleLocation, { payload: { lat, lon, name, country } });
    yield fork(handleWeather, { payload: { lat, lon } });
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        setLocation({
          error: error.message,
        })
      );
    }
  }
}

function* watchLocationByCoordinatedSaga() {
  yield takeLatest(
    getLocationAndWeather.type,
    handleLocationAndWeatherByCoordinates
  );
}

function* watchLocationByPlaceSaga() {
  yield takeLatest(
    getLocationAndWeatherByPlace.type,
    handleLocationAndWeatherByPlace
  );
}

export function* watchCalendarSaga() {
  yield takeLatest(getEvents.type, handleEvents);
}

export function* rootSaga() {
  yield Effects.spawn(watchLocationByCoordinatedSaga);
  yield Effects.spawn(watchLocationByPlaceSaga);
  yield Effects.spawn(watchCalendarSaga);
}
