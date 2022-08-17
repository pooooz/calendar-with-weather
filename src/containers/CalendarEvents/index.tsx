import React from 'react';

import { events } from './mocks';

export const CalendarEvents = () => (
  <ul>
    {events.map(({ time, text }) => (
      <li key={text}>
        {time} - {text}
      </li>
    ))}
  </ul>
);
