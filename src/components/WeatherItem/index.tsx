import React from 'react';
import { getIconPath } from 'utils/helpers';

export const WeatherItem = ({ weatherDay }: { weatherDay: DerivedDayData }) => (
  <li>
    <h4>{weatherDay.weekday}</h4>
    <img
      src={`../img/icons/${getIconPath(
        weatherDay.weatherCodeDay,
        weatherDay.description
      )}`}
      alt="Weather icon"
    />
    <h4>{weatherDay.description}</h4>
    <h4>{weatherDay.temperature}</h4>
  </li>
);
