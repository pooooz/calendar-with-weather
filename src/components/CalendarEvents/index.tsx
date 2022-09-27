import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import { getEvents } from 'store/sagas/actions';
import { selectEvents } from 'store/calendar/selectors';
import { List } from 'components/List';
import { EventItem } from 'components/EventItem';

import { apiCalendar, config } from 'services/googleCalendar';

import {
  AuthButton,
  ButtonArea,
  ErrorHeading,
  EventsWrap,
  GetEventsButton,
} from './styled';

export const CalendarEvents = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { events, error } = useAppSelector(selectEvents);
  const dispatch = useDispatch();

  const requestEvents = () => {
    dispatch(getEvents());
  };

  const handleSignIn = () => {
    apiCalendar.handleAuthClick();
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    apiCalendar.handleSignoutClick();
    setIsSignedIn(false);
  };

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(GoogleAuth.isSignedIn.get());
      });
    };
  });

  return (
    <EventsWrap>
      <ButtonArea>
        <GetEventsButton type="button" onClick={requestEvents}>
          GET NEWS
        </GetEventsButton>
        <AuthButton
          onClick={isSignedIn ? handleSignOut : handleSignIn}
          isSignedIn={isSignedIn}
        >
          {isSignedIn ? 'Sign out' : 'Sign in'}
        </AuthButton>
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
