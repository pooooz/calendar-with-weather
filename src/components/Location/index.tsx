import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import { getCurrentGeolocation } from 'utils/index';

import {
  selectCountryAndPlace,
  selectIsSelectedByUser,
} from 'store/location/selectors';

import { getLocationAndWeather } from 'store/sagas/actions';

import { Modal } from 'components/Modal';
import { CitySelector } from 'components/CitySelector';

import {
  LocationWrap,
  Place,
  Country,
  SelectorButton,
  ErrorHeading,
} from './styled';

export const Location = () => {
  const { country, place, error } = useAppSelector(selectCountryAndPlace);
  const isSelectedByUser = useAppSelector(selectIsSelectedByUser);

  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);

  const handleButtonClick = () => {
    setModalOpened(true);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        modalOpened &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setModalOpened(false);
      }
    },
    [modalOpened]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleOutsideClick]);

  useEffect(() => {
    if (!isSelectedByUser) {
      getCurrentGeolocation(async (pos) => {
        const { coords } = pos;
        dispatch(
          getLocationAndWeather({
            lat: coords.latitude,
            lon: coords.longitude,
          })
        );
      });
    }
  }, [dispatch]);

  return (
    <LocationWrap>
      <SelectorButton onClick={handleButtonClick}>Select city</SelectorButton>
      {error ? <ErrorHeading>{error}</ErrorHeading> : null}
      <Place>{place}</Place>
      <Country>{country}</Country>
      <Modal isOpened={modalOpened}>
        <CitySelector ref={formRef} />
      </Modal>
    </LocationWrap>
  );
};
