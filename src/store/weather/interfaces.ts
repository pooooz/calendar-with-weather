export interface WeatherState {
  service: WeatherServices;
  weekInfo: Array<DerivedDayData>;
  today: string;
  requestTimestamp: string;
  error: string;
}

export interface setWeatherPayload {
  weather?: Array<DerivedDayData>;
  error?: string;
}

export interface setServicePayload {
  service: WeatherServices;
}
