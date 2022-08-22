import { weatherCodeDayMap } from 'store/sagas/mocks';

export const selectWeatherInfo = (weatherInfo: WeatherData) => {
  const basicData = weatherInfo.data.timelines[0].intervals;

  return basicData.map((day) => {
    const weatherDescription = weatherCodeDayMap.get(
      day.values.weatherCodeDay.toString()
    );
    return {
      weekday: new Date(day.startTime).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
      ...day.values,
      description: weatherDescription || 'Unknown',
    };
  });
};
