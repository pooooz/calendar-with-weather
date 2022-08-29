import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleService } from 'store/sagas/actions';
import { useAppSelector } from 'store/hooks';

import { selectCoordinates } from 'store/location/selectors';
import { selectWeatherService } from 'store/weather/selectors';

import { ButtonArea, ServiceButton, ChoosePrompt } from './styled';

export const WeatherServicesToggle = () => {
  const dispatch = useDispatch();

  const service = useAppSelector(selectWeatherService);
  const { latitude, longitude } = useAppSelector(selectCoordinates);

  const isActive = (
    serviceName: keyof typeof WeatherServices,
    actualService: keyof typeof WeatherServices
  ) => serviceName === actualService;

  return (
    <ButtonArea>
      <ChoosePrompt>Choose service: </ChoosePrompt>
      <ServiceButton
        type="button"
        onClick={() =>
          dispatch(
            toggleService({
              service: 'TomorrowIo',
              latitude,
              longitude,
            })
          )
        }
        isActive={isActive(service, 'TomorrowIo')}
      >
        Tomorrow Io
      </ServiceButton>
      <ServiceButton
        type="button"
        onClick={() =>
          dispatch(
            toggleService({
              service: 'VisualCrossing',
              latitude,
              longitude,
            })
          )
        }
        isActive={isActive(service, 'VisualCrossing')}
      >
        Visual Crossing
      </ServiceButton>
    </ButtonArea>
  );
};
