export {};

declare global {
  interface DayData {
    startTime: string;
    values: {
      temperature: number;
      weatherCodeDay: number;
    };
  }

  interface DerivedDayData {
    weekday: string;
    temperature: number;
    weatherCodeDay: number;
    description: string;
  }

  interface Timeline {
    startTime: string;
    endTime: string;
    timestep: string;
    intervals: Array<DayData>;
  }

  interface WeatherData {
    data: { timelines: Array<Timeline> };
  }

  interface EventItemData {
    start: {
      dateTime: string;
      timeZone: string;
    };
    id: string;
    summary?: string;
  }

  interface EventsData {
    items: Array<EventItemData>;
  }
}
