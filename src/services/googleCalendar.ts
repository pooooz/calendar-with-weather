import ApiCalendar from 'react-google-calendar-api';

import { extractEventsInfo } from 'utils/index';

import {
  GOOGLE_CALENDAR_CLIENT_ID,
  GOOGLE_CALENDAR_API_KEY,
} from '../constants';

const config = {
  clientId: GOOGLE_CALENDAR_CLIENT_ID as string,
  apiKey: `${GOOGLE_CALENDAR_API_KEY}` as string,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
  cookiePolicy: 'single_host_origin',
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
