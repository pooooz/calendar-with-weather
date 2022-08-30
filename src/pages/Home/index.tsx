import React from 'react';

import { useAppSelector } from 'store/hooks';
import { selectTodayWeatherDescription } from 'store/weather/selectors';
import { Clock } from 'components/Clock';
import { Location } from 'components/Location';
import { Weather } from 'components/Weather';
import { WeatherServicesToggle } from 'components/WeatherServicesToggle';
import { CalendarEvents } from 'components/CalendarEvents';

import { getBackgroundNameByDescription } from 'utils/index';

import { backgrounds, splashScreens } from './constants';
import { DataWrap, Footer, Header, WeatherBackground } from './styled';

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
        <WeatherServicesToggle />
        <Footer>
          <Weather />
        </Footer>
      </DataWrap>
    </WeatherBackground>
  );
};
