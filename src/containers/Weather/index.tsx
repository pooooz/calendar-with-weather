import React from 'react';

import { useAppSelector } from 'store/hooks';
import { selectWeatherInfo } from 'store/weather/selectors';
import { List } from 'components/List';
import { WeatherItem } from 'components/WeatherItem';
import { ErrorHeading, WeatherWrap } from './styled';

export const Weather = () => {
  const { weekInfo, error } = useAppSelector(selectWeatherInfo);
  return (
    <WeatherWrap>
      {error && <ErrorHeading>{error}</ErrorHeading>}
      <WeatherItem weatherDay={weekInfo[0]} wrapElement="div" />
      <List
        items={weekInfo.slice(1, weekInfo.length)}
        renderItem={(dayInfo: DerivedDayData) => (
          <WeatherItem key={dayInfo.weekday} weatherDay={dayInfo} />
        )}
      />
    </WeatherWrap>
  );
};
