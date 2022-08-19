export {};

declare global {
  interface DayWeather {
    startTime: string;
    values: {
      temperature: number;
      weatherCodeFullDay: number;
    };
  }

  interface Timeline {
    startTime: string;
    endTime: string;
    timestep: string;
    intervals: Array<DayWeather>;
  }

  interface WeatherData {
    data: { timelines: Array<Timeline> };
  }
}
