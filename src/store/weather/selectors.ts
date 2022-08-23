export const selectWeatherInfo = (state: {
  weather: { weekInfo: DerivedDayData[]; error: string };
}) => {
  const { weekInfo, error } = state.weather;
  return { weekInfo, error };
};

export const selectTodayWeatherDescription = (state: {
  weather: { today: string };
}) => state.weather.today;
