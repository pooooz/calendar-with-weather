import React from 'react';

import { useAppSelector } from 'store/hooks';
import { selectWeatherInfo } from 'store/weather/selectors';
import { ErrorHeading } from './styled';

export const Weather = () => {
  const { weekInfo, error } = useAppSelector(selectWeatherInfo);
  console.log(weekInfo);
  return (
    <>
      {error && <ErrorHeading>{error}</ErrorHeading>}
      <h1>Hello everyOne </h1>
    </>
  );
};
