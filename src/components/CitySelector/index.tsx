import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLocationAndWeatherByPlace } from 'store/sagas/actions';

import {
  ShadowWrap,
  CitySelectorForm,
  Fieldset,
  EntryPrompt,
  Input,
  SearchButton,
} from './styled';

export const CitySelector = React.forwardRef<HTMLFormElement>((props, ref) => {
  const [city, setCity] = useState<string>('');

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getLocationAndWeatherByPlace({ place: city }));
    setCity('');
  };

  const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <ShadowWrap>
      <CitySelectorForm onSubmit={handleSubmit} ref={ref}>
        <Fieldset>
          <EntryPrompt>Enter City Name</EntryPrompt>
          <Input type="text" value={city} onChange={handleChangeCity} />
        </Fieldset>
        <SearchButton type="submit">Search</SearchButton>
      </CitySelectorForm>
    </ShadowWrap>
  );
});
