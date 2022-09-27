import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarState, setEventsPayload } from './interfaces';

const initialState: CalendarState = {
  events: [
    {
      start: {
        dateTime: new Date().toISOString(),
        timeZone: 'Europe/Minsk',
      },
      id: '1',
      summary: 'Sign in to get your events',
    },
  ],
  error: '',
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (
      state,
      { payload: { events, error } }: PayloadAction<setEventsPayload>
    ) => {
      if (events) {
        state.events = events;
      }

      if (error === '') {
        state.error = '';
      } else {
        state.error = error || state.error;
      }
    },
  },
});

export const { setEvents } = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
