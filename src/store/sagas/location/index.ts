import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { selectCoordinates } from 'store/location/selectors';
import { setLocation } from 'store/location';
import { LocationState, setLocationPayload } from 'store/location/interface';
import { isoCountriesMap } from 'constants/index';

import { LocationData } from 'services/openWeather/interfaces';
import { fetchLocationName } from 'services/openWeather';

const shouldFetchData = (
  prevLat: number,
  prevLon: number,
  lat: number,
  lon: number
) => lat !== prevLat || lon !== prevLon;

export function* handleLocation({
  payload: { lat, lon, name, country },
}: PayloadAction<{
  lat: number;
  lon: number;
  name?: string;
  country?: string;
}>): Generator<
  | CallEffect<LocationData>
  | PutEffect<PayloadAction<setLocationPayload>>
  | SelectEffect,
  void,
  LocationData | LocationState
> {
  try {
    const coordinates = yield select(selectCoordinates);
    const { latitude, longitude } = coordinates as LocationState;

    if (!name && !country) {
      if (shouldFetchData(latitude, longitude, lat, lon)) {
        const locationInfo = yield call(fetchLocationName, lat, lon);

        const locationCountry =
          isoCountriesMap.get(locationInfo.country) || locationInfo.country;

        yield put(
          setLocation({
            lat,
            lon,
            place: (locationInfo as LocationData).name,
            country: locationCountry,
            error: '',
          })
        );
      }
    } else {
      const locationCountry = isoCountriesMap.get(country as string) || country;
      yield put(
        setLocation({
          lat,
          lon,
          place: name,
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
