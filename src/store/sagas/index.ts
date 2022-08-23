import * as Effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getLocation } from 'store/sagas/actions';
import { handleLocation } from 'store/sagas/location';
import { handleWeather } from 'store/sagas/weather';

// ;)
const fork: any = Effects.fork;
const call: any = Effects.call;
const takeLatest: any = Effects.takeLatest;

function* handleLocationAndWeather(
  action: PayloadAction<{ lat: number; lon: number } | { message: string }>
) {
  yield call(handleLocation, action);
  yield fork(handleWeather, action);
}

export function* watchLocationSaga() {
  yield takeLatest(getLocation.type, handleLocationAndWeather);
}

export function* rootSaga() {
  yield Effects.all([fork(watchLocationSaga)]);
}
