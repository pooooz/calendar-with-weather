import React from 'react';

import {
  WeatherItemWrapLi,
  WeatherItemWrapDiv,
  Icon,
  Weekday,
  Today,
  Temperature,
  DayTemperature,
  DayInfoWrap,
  TodayInfoWrap,
  ActualIcon,
} from './styled';

interface WeatherItemProps {
  weatherDay: DerivedDayData;
  wrapElement?: 'li' | 'div';
}

export const WeatherItem = ({
  weatherDay,
  wrapElement = 'li',
}: WeatherItemProps) => {
  if (wrapElement === 'div') {
    return (
      <WeatherItemWrapDiv>
        <ActualIcon
          src={`../img/icons/${weatherDay.weatherCodeDay}@2x.png`}
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
          src={`../img/icons/${weatherDay.weatherCodeDay}.png`}
          alt={weatherDay.description}
        />
        <Temperature>{Math.trunc(weatherDay.temperature)}&#176;</Temperature>
      </DayInfoWrap>
    </WeatherItemWrapLi>
  );
};
