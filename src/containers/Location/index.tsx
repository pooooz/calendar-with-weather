import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentGeolocation } from 'utils';

import { getLocation } from 'store/sagas/actions';
import { useAppSelector } from 'store/hooks';

import { LocationWrap, Place, Country, ErrorHeading } from './styled';

export const Location = () => {
  const { country, place, error } = useAppSelector((store) => store.location);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentGeolocation(async (pos) => {
      const { coords } = pos;
      dispatch(
        getLocation({
          lat: coords.latitude,
          lon: coords.longitude,
        })
      );
    });
  }, [dispatch]);

  return (
    <LocationWrap>
      {error ? <ErrorHeading>{error}</ErrorHeading> : null}
      <Place>{place}</Place>
      <Country>{country}</Country>
    </LocationWrap>
  );
};
