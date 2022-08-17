import React, { useEffect, useState } from 'react';
import { fetchLocationName, getCurrentGeolocation } from 'utils';

export const Location = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getCurrentGeolocation(async (pos) => {
      const { coords } = pos;
      const data = await fetchLocationName(coords.latitude, coords.longitude);
      setLocation(data[0].name);
    });
  }, []);

  return <h1>{location}</h1>;
};
