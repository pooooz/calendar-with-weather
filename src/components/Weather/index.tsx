import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import {
  selectRequestTimestamp,
  selectWeatherInfo,
  selectWeatherService,
} from 'store/weather/selectors';
import { List } from 'components/List';
import { WeatherItem } from 'components/WeatherItem';
import { selectCoordinates } from 'store/location/selectors';
import { getWeatherByCoordinates } from 'store/sagas/actions';

import { shouldRequestWeather } from 'utils/index';

import { ErrorHeading, WeatherWrap } from './styled';

export const Weather = () => {
  const { weekInfo, error } = useAppSelector(selectWeatherInfo);
  const requestTimestamp = useAppSelector(selectRequestTimestamp);
  const { latitude, longitude } = useAppSelector(selectCoordinates);
  const service = useAppSelector(selectWeatherService);

  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldRequestWeather(requestTimestamp)) {
      dispatch(
        getWeatherByCoordinates({ lat: latitude, lon: longitude, service })
      );
    }
  });

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
