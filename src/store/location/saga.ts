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

import { fetchLocationName, LocationData } from 'utils/index';
import { isoCountriesMap } from 'containers/Location/mock';

import { getLocation } from 'store/location/actions';
import { selectCoordinates } from 'store/location/selectors';
import { locationState, setLocation, setLocationPayload } from './index';

const shouldFetchData = (
  prevLat: number,
  prevLon: number,
  lat: number,
  lon: number
) => {
  if (lat !== prevLat || lon !== prevLon) {
    return true;
  }
  return false;
};

function* handleLocation(
  action: PayloadAction<{ lat: number; lon: number }>
): Generator<
  | CallEffect<LocationData>
  | PutEffect<PayloadAction<setLocationPayload>>
  | SelectEffect,
  void,
  LocationData | locationState
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
          place: (locationInfo as LocationData).name,
          country: locationCountry,
          error: '',
        })
      );
    }
  } catch (error) {
    console.error(error);
    console.error('Unable to fetch data');
    if (error instanceof Error) {
      yield put(
        setLocation({
          error: error.message,
        })
      );
    }
  }
}

export function* locationSaga() {
  yield takeLatest(getLocation.type, handleLocation);
}
