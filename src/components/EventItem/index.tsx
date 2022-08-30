import React from 'react';

import { timeOptions } from './constants';
import { EventWrap, Time } from './styled';

interface EventItemProps {
  eventInfo: EventItemData;
}
export const EventItem = ({
  eventInfo: { start, summary },
}: EventItemProps) => {
  const eventDate = new Date(start.dateTime);
  return (
    <EventWrap>
      <Time>{eventDate.toLocaleTimeString('en-US', timeOptions)}</Time> -{' '}
      {summary}
    </EventWrap>
  );
};
