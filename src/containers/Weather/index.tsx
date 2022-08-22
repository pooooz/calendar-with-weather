import React from 'react';

import { useAppSelector } from 'store/hooks';
import { selectWeatherInfo } from 'store/weather/selectors';
import { List } from 'components/List';
import { WeatherItem } from 'components/WeatherItem';
import { ErrorHeading } from './styled';

export const Weather = () => {
  const { weekInfo, error } = useAppSelector(selectWeatherInfo);
  return (
    <>
      {error && <ErrorHeading>{error}</ErrorHeading>}
      <List
        items={weekInfo}
        renderItem={(dayInfo: DerivedDayData) => (
          <WeatherItem key={dayInfo.weekday} weatherDay={dayInfo} />
        )}
      />
    </>
  );
};
