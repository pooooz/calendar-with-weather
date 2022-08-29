export {};

declare global {
  enum WeatherServices {
    TomorrowIo = 'TomorrowIo',
    VisualCrossing = 'VisualCrossing',
  }

  interface DayDataTomorrowIo {
    startTime: string;
    values: {
      temperature: number;
      weatherCodeDay: number;
    };
  }

  interface Timeline {
    startTime: string;
    endTime: string;
    timestep: string;
    intervals: Array<DayDataTomorrowIo>;
  }

  interface WeatherDataTomorrowIo {
    data: { timelines: Array<Timeline> };
  }

  interface DayDataVisualCrossing {
    datetime: string;
    temp: number;
    description: string;
    icon: string;
  }

  interface WeatherDataVisualCrossing {
    days: Array<DayDataVisualCrossing>;
  }

  interface DerivedDayData {
    weekday: string;
    temperature: number;
    description: string;
    weatherCodeDay?: number;
    icon?: string;
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
