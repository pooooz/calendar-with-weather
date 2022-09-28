export interface CalendarState {
  events: Array<EventItemData>;
  error: string;
}

export interface setEventsPayload {
  events?: Array<EventItemData>;
  error?: string;
}
