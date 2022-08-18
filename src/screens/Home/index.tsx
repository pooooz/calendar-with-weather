import React from 'react';

import { Clock } from 'containers/Clock';
import { Location } from 'containers/Location';
import { CalendarEvents } from 'containers/CalendarEvents';
import { Weather } from 'containers/Weather';
import { splashScreens, backgrounds } from './mocks';

import { DataWrap, Header, WeatherBackground } from './styled';

export const Home = () => (
  <WeatherBackground background={backgrounds.rainy}>
    <DataWrap background={splashScreens.rainy}>
      <Header>
        <Clock />
        <Location />
      </Header>
      <CalendarEvents />
      <footer>
        <Weather />
      </footer>
    </DataWrap>
  </WeatherBackground>
);
