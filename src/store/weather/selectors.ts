export const selectWeatherInfo = (state: {
  weather: { weekInfo: DerivedDayData[]; error: string };
}) => state.weather;

export const selectTodayWeatherDescription = (state: {
  weather: { today: string };
}) => state.weather.today;
