import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleService } from 'store/sagas/actions';
import { useAppSelector } from 'store/hooks';
import { selectCoordinates } from 'store/location/selectors';
import { selectWeatherService } from 'store/weather/selectors';
import { weatherServices } from 'constants/index';

import { ButtonArea, ChoosePrompt, ServiceButton } from './styled';

export const WeatherServicesToggle = () => {
  const dispatch = useDispatch();

  const service = useAppSelector(selectWeatherService);
  const { latitude, longitude } = useAppSelector(selectCoordinates);

  const isActive = (
    serviceName: WeatherServices,
    actualService: WeatherServices
  ) => serviceName === actualService;

  return (
    <ButtonArea>
      <ChoosePrompt>Choose service: </ChoosePrompt>
      {Object.keys(weatherServices).map((serviceName) => (
        <ServiceButton
          type="button"
          onClick={() =>
            dispatch(
              toggleService({
                service: weatherServices[serviceName as WeatherServices],
                latitude,
                longitude,
              })
            )
          }
          isActive={isActive(service, serviceName as WeatherServices)}
          key={serviceName}
        >
          {serviceName}
        </ServiceButton>
      ))}
    </ButtonArea>
  );
};
