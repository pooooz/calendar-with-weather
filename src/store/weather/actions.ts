const getWeatherType = 'weather/getWeather';
export const getWeather = (payload: { message: string }) => ({
  type: getWeatherType,
  payload,
});
getWeather.type = getWeatherType;
