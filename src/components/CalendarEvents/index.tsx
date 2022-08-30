import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import { getEvents } from 'store/sagas/actions';
import { selectEvents } from 'store/calendar/selectors';
import { List } from 'components/List';
import { EventItem } from 'components/EventItem';

import { apiCalendar } from 'services/googleCalendar';

import {
  AuthButton,
  ButtonArea,
  ErrorHeading,
  EventsWrap,
  GetEventsButton,
} from './styled';

export const CalendarEvents = () => {
  const { events, error } = useAppSelector(selectEvents);
  const dispatch = useDispatch();

  const requestEvents = () => {
    dispatch(getEvents());
  };

  const handleSignIn = () => {
    apiCalendar.handleAuthClick();
  };

  const handleSignOut = () => {
    apiCalendar.handleSignoutClick();
  };

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      apiCalendar.handleAuthClick();
    };
  });

  return (
    <EventsWrap>
      <ButtonArea>
        <GetEventsButton type="button" onClick={requestEvents}>
          GET NEWS
        </GetEventsButton>
        <div>
          <AuthButton onClick={handleSignIn} isSignIn>
            Sign in
          </AuthButton>
          <AuthButton onClick={handleSignOut}>Sign out</AuthButton>
        </div>
      </ButtonArea>
      {error && <ErrorHeading>{error}</ErrorHeading>}
      {events.length ? (
        <List
          items={events}
          renderItem={(eventInfo: EventItemData) => (
            <EventItem eventInfo={eventInfo} key={eventInfo.id} />
          )}
          direction="column"
        />
      ) : (
        <h3>No events for today</h3>
      )}
    </EventsWrap>
  );
};
