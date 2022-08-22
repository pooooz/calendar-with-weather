import {
  call,
  put,
  select,
  CallEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchLocationName, LocationData } from 'utils/index';
import { selectCoordinates } from 'store/location/selectors';
import { locationState, setLocation, setLocationPayload } from 'store/location';
import { isoCountriesMap } from '../mocks';

const shouldFetchData = (
  prevLat: number,
  prevLon: number,
  lat: number,
  lon: number
) => lat !== prevLat || lon !== prevLon;

export function* handleLocation(
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
