export {};

declare global {
  interface DayData {
    startTime: string;
    values: {
      temperature: number;
      weatherCodeFullDay: number;
    };
  }

  interface DerivedDayData {
    weekday: string;
    temperature: number;
    weatherCodeFullDay: number;
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
}
