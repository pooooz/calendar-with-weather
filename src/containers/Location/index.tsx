import React, { useEffect, useState } from 'react';

import { fetchLocationName, getCurrentGeolocation } from 'utils';
import { LocationWrap, Place, Country } from './styled';

import { getCountryName } from './helpers';

export const Location = () => {
  const [{ country, place }, setLocation] = useState({
    country: 'Belarus',
    place: 'Minsk',
  });

  useEffect(() => {
    getCurrentGeolocation(async (pos) => {
      const { coords } = pos;
      const data = await fetchLocationName(coords.latitude, coords.longitude);
      console.log(data);
      setLocation({
        place: data[0].name,
        country: getCountryName(data[0].country),
      });
    });
  }, []);

  return (
    <LocationWrap>
      <Place>{place}</Place>
      <Country>{country}</Country>
    </LocationWrap>
  );
};
