import React from 'react';

import { useAppSelector } from 'store/hooks';
import { selectWeatherService } from 'store/weather/selectors';

import { getIconPath } from 'utils/index';

import {
  ActualIcon,
  DayInfoWrap,
  DayTemperature,
  Icon,
  Temperature,
  Today,
  TodayInfoWrap,
  WeatherItemWrapDiv,
  WeatherItemWrapLi,
  Weekday,
} from './styled';
import { WeatherItemProps } from './interfaces';

export const WeatherItem = ({
  weatherDay,
  wrapElement = 'li',
}: WeatherItemProps) => {
  const service = useAppSelector(selectWeatherService);

  const file =
    service === 'TomorrowIo' ? weatherDay.weatherCodeDay : weatherDay.icon;

  if (wrapElement === 'div') {
    return (
      <WeatherItemWrapDiv>
        <ActualIcon
          src={getIconPath(service, file, true)}
          alt={weatherDay.description}
        />
        <TodayInfoWrap>
          <Today>Today</Today>
          <DayTemperature>
            {Math.trunc(weatherDay.temperature)}&#176;
          </DayTemperature>
        </TodayInfoWrap>
      </WeatherItemWrapDiv>
    );
  }
  return (
    <WeatherItemWrapLi>
      <Weekday>{weatherDay.weekday}</Weekday>
      <DayInfoWrap>
        <Icon
          src={getIconPath(service, file, false)}
          alt={weatherDay.description}
        />
        <Temperature>{Math.trunc(weatherDay.temperature)}&#176;</Temperature>
      </DayInfoWrap>
    </WeatherItemWrapLi>
  );
};
