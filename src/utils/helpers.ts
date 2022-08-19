export const selectWeatherInfo = (weatherInfo: WeatherData) => {
  const basicData = weatherInfo.data.timelines[0].intervals;
  const derivedData = basicData.map((day) => ({
    weekday: new Date(day.startTime).toLocaleDateString('en-US', {
      weekday: 'short',
    }),
    ...day.values,
  }));
  return derivedData;
};
