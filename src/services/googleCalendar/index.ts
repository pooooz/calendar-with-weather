import ApiCalendar from 'react-google-calendar-api';

import {
  GOOGLE_CALENDAR_API_KEY,
  GOOGLE_CALENDAR_CLIENT_ID,
} from 'constants/index';

import { extractEventsInfo } from 'utils/index';

export const config = {
  clientId: GOOGLE_CALENDAR_CLIENT_ID as string,
  apiKey: `${GOOGLE_CALENDAR_API_KEY}` as string,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
  plugin_name: 'CALENDAR_WITH_WEATHER',
};

export const apiCalendar = new ApiCalendar(config);

export const fetchTodayEvents = async () => {
  const today = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));

  const data = await apiCalendar.listEvents({
    timeMin: today.toISOString(),
    timeMax: tomorrow.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });

  const eventsInfo: EventsData = JSON.parse(data.body);
  return extractEventsInfo(eventsInfo);
};
