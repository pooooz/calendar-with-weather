import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface calendarState {
  events: Array<EventItemData>;
  error: string;
}
const initialState: calendarState = {
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

interface setEventsPayload {
  events?: Array<EventItemData>;
  error?: string;
}
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
