import React from 'react';

import { List } from 'components/List';
import { events } from './mocks';

export const CalendarEvents = () => {
  console.log(events);
  return (
    <List
      items={events}
      renderItem={({ time, text }) => (
        <li key={text}>
          {time} - {text}
        </li>
      )}
      direction="column"
    />
  );
};
