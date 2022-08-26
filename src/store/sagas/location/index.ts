import {
  call,
  put,
  select,
  CallEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchLocationName, LocationData } from 'services/openWeather';
import { selectCoordinates } from 'store/location/selectors';
import { locationState, setLocation, setLocationPayload } from 'store/location';
import { isoCountriesMap } from 'constants/index';

const shouldFetchData = (
  prevLat: number,
  prevLon: number,
  lat: number,
  lon: number
) => lat !== prevLat || lon !== prevLon;

export function* handleLocation(
  action: PayloadAction<{
    lat: number;
    lon: number;
    name?: string;
    country?: string;
  }>
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

    if (!action.payload.name && !action.payload.country) {
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
    } else {
      const locationCountry =
        isoCountriesMap.get(action.payload.country as string) ||
        action.payload.country;
      yield put(
        setLocation({
          lat: action.payload.lat,
          lon: action.payload.lon,
          place: action.payload.name,
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
