import {
  call,
  put,
  takeLatest,
  select,
  CallEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchLocationName, IData } from 'utils/index';
import { isoCountriesMap } from 'containers/Location/mock';

import { getLocation } from 'store/location/actions';
import { selectCoordinates } from 'store/location/selectors';
import {
  locationState,
  setLocation,
  setLocationPayload,
  setLocationWithErrorPayload,
} from './index';

const shouldFetchData = (
  prevLat: number,
  prevLon: number,
  lat: number,
  lon: number
) => {
  if (Math.abs(lat - prevLat) >= 0.5 || Math.abs(lon - prevLon) >= 0.5) {
    return true;
  }
  return false;
};

function* handleLocation(
  action: PayloadAction<{ lat: number; lon: number }>
): Generator<
  | CallEffect<IData>
  | PutEffect<PayloadAction<setLocationPayload | setLocationWithErrorPayload>>
  | SelectEffect,
  void,
  IData | locationState
> {
  try {
    const coordinates = yield select(selectCoordinates);
    const { latitude, longitude } = coordinates as locationState;

    if (
      shouldFetchData(
        latitude,
        longitude,
        action.payload.lat,
        action.payload.lon
      )
    ) {
      console.log('Попал');
      const locationInfo = yield call(
        fetchLocationName,
        action.payload.lat,
        action.payload.lon
      );

      const locationCountry =
        isoCountriesMap.get(locationInfo.country) || locationInfo.country;

      yield put(
        setLocation({
          lat: action.payload.lat,
          lon: action.payload.lon,
          place: (locationInfo as IData).name,
          country: locationCountry,
        })
      );
    }
  } catch (error) {
    console.error(error);
    console.error('Unable to fetch data');
    if (error instanceof Error) {
      yield put(
        setLocation({
          lat: action.payload.lat,
          lon: action.payload.lon,
          error: error.message,
        })
      );
    }
  }
}

export function* locationSaga() {
  yield takeLatest(getLocation.type, handleLocation);
}
