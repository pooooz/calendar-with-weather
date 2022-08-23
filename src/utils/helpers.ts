import { weatherCodeDayMap } from 'store/sagas/mocks';

export const extractWeatherInfo = (weatherInfo: WeatherData) => {
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

export const getIconPath = (weatherCodeDay: number, description: string) =>
  `${weatherCodeDay}_${description
    .split(/\s|,/)
    .map((elem) => {
      switch (elem.toLowerCase()) {
        case '': {
          return '';
        }
        default: {
          return `${elem.toLowerCase()}_`;
        }
      }
    })
    .join('')}`;
