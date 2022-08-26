import React from 'react';

import { useAppSelector } from 'store/hooks';

import { selectTodayWeatherDescription } from 'store/weather/selectors';
import { getBackgroundNameByDescription } from 'utils/index';

import { Clock } from 'components/Clock';
import { Location } from 'components/Location';
import { Weather } from 'components/Weather';
import { CalendarEvents } from 'components/CalendarEvents';

import { splashScreens, backgrounds } from './constants';

import { DataWrap, Header, WeatherBackground, Footer } from './styled';

export const Home = () => {
  const descriptionToday = useAppSelector(selectTodayWeatherDescription);
  const imageName = getBackgroundNameByDescription(descriptionToday);
  return (
    <WeatherBackground background={backgrounds.get(imageName) || 'rainy'}>
      <DataWrap background={splashScreens.get(imageName) || 'rainy'}>
        <Header>
          <Clock />
          <Location />
        </Header>
        <CalendarEvents />
        <Footer>
          <Weather />
        </Footer>
      </DataWrap>
    </WeatherBackground>
  );
};
