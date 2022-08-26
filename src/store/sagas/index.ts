import * as Effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getEvents, getLocation } from 'store/sagas/actions';

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

function* handleLocationAndWeather(
  action: PayloadAction<{ lat: number; lon: number } | { place: string }>
): Generator<
  CallEffect<LocationDataWithCoordinates> | PutEffect,
  void,
  LocationDataWithCoordinates
> {
  if ('place' in action.payload) {
    try {
      const { lat, lon, name, country } = yield call(
        fetchLocationCoordinates,
        action.payload.place
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
  } else {
    yield call(handleLocation, action);
    yield fork(handleWeather, action);
  }
}

export function* watchLocationSaga() {
  yield takeLatest(getLocation.type, handleLocationAndWeather);
}

export function* watchCalendarSaga() {
  yield takeLatest(getEvents.type, handleEvents);
}

export function* rootSaga() {
  yield Effects.spawn(watchLocationSaga);
  yield Effects.spawn(watchCalendarSaga);
}
