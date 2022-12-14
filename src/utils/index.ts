import { PUBLIC_URL, weatherCodeDayMap } from '../constants';

export const getCurrentGeolocation = (
  callback: (pos: GeolocationPosition) => void
) => {
  const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const onError: PositionErrorCallback = (err) => {
    throw new Error(`ERROR(${err.code}): ${err.message}`);
  };
  navigator.geolocation.getCurrentPosition(callback, onError, options);
};

export const shouldRequestWeather = (requestTimestamp: string) => {
  const refreshTimeMin = 30;

  const requestTime = new Date(requestTimestamp);
  const now = new Date();

  return (now.getTime() - requestTime.getTime()) / 1000 / 60 >= refreshTimeMin;
};

export const extractWeatherInfoTomorrowIo = (
  weatherInfo: WeatherDataTomorrowIo
) => {
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

export const extractWeatherInfoVisualCrossing = (
  weatherInfo: WeatherDataVisualCrossing
): DerivedDayData[] => {
  const basicData = weatherInfo.days;
  return basicData.map((day) => ({
    weekday: new Date(day.datetime).toLocaleDateString('en-US', {
      weekday: 'short',
    }),
    temperature: day.temp,
    description: day.description,
    icon: day.icon,
  }));
};

export const extractEventsInfo = (
  eventsInfo: EventsData
): Array<EventItemData> =>
  eventsInfo.items.map(({ start, summary = '(Without summary)', id }) => ({
    start,
    summary,
    id,
  }));

export const getIconPath = (
  service: WeatherServices,
  iconName: string | number | undefined,
  isLarge: boolean
) => {
  switch (service) {
    case 'TomorrowIo': {
      if (isLarge) return `${PUBLIC_URL}/icons/${service}/${iconName}@2x.png`;
      return `${PUBLIC_URL}/icons/${service}/${iconName}.png`;
    }
    case 'VisualCrossing': {
      return `${PUBLIC_URL}/icons/${service}/${iconName}.svg`;
    }
    default: {
      return `${PUBLIC_URL}/icons/unexpected.png`;
    }
  }
};

export const getBackgroundNameByDescription = (description: string) => {
  const descriptionInLowerCase = description.toLowerCase();
  const cases = ['clear', 'snow', 'cloudy', 'rainy'];
  for (let i = 0; i < cases.length; i++) {
    if (new RegExp(cases[i]).test(descriptionInLowerCase)) {
      return cases[i];
    }
  }
  return 'clear';
};
