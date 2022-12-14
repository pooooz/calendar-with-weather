import styled from 'styled-components';

const DIMMING = 'rgba(0, 0, 0, 0.5)';
const FORM_BACKGROUND_COLOR = 'rgb(128, 124, 147)';
const INPUT_TEXT_COLOR = '#000000';
const FOCUS_COLOR = '#800080FF';
const BUTTON_BACKGROUND_COLOR = '#199e7f';
const BUTTON_AFTER_COLOR = 'rgba(255, 255, 255, 0.1)';
const BUTTON_BORDER_COLOR = '#FFFFFF';
const CITY_SELECTOR_SHADOW = '10px 10px rgba(0, 0, 0, 0.25)';
const BUTTON_ACTIVE_SHADOW = '0 5px 10px rgba(0, 0, 0, 0.2)';

const FULL = '100%';
const HALF = '50%';
const CITY_SELECTOR_TABLET_WIDTH = '70%';

const TEXT_LINE_HEIGHT = 30;

const FORM_BORDER_RADIUS = '0 0 10% 10% / 0% 0% 10% 10%';
const FORM_BORDER_RADIUS_HOVER = '0 0 50% 50% / 0% 0% 10% 10%';

export const ShadowWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${FULL};
  height: ${FULL};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${DIMMING};
`;

export const CitySelectorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${HALF};
  width: ${HALF};
  background: ${FORM_BACKGROUND_COLOR};
  align-items: center;
  border-radius: ${FORM_BORDER_RADIUS};
  transition: all 0.4s ease;

  &:hover {
    border-radius: ${FORM_BORDER_RADIUS_HOVER};
    box-shadow: ${CITY_SELECTOR_SHADOW};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${CITY_SELECTOR_TABLET_WIDTH}%;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const EntryPrompt = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  margin: ${({ theme }) => theme.spaces.l}px 0 0 0;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  padding: 0 0 0 ${({ theme }) => theme.spaces.l}px;
  color: ${INPUT_TEXT_COLOR};
  outline: none;
  border: none;
  line-height: ${TEXT_LINE_HEIGHT}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;

  &:focus {
    outline: 2px solid ${FOCUS_COLOR};
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  background: ${BUTTON_BACKGROUND_COLOR};
  width: ${HALF};

  line-height: ${TEXT_LINE_HEIGHT}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;

  border-radius: ${({ theme }) => theme.sizes.radius}px;

  border: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${FULL};
    height: ${FULL};
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: ${BUTTON_BORDER_COLOR};
    border-bottom-color: ${BUTTON_BORDER_COLOR};
    border-radius: ${({ theme }) => theme.sizes.radius}px;
    transform: scale(0.1, 1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${FULL};
    height: ${FULL};
    z-index: 1;
    transition: all 0.3s;
    border-radius: ${({ theme }) => theme.sizes.radius}px;
    background-color: ${BUTTON_AFTER_COLOR};
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${BUTTON_ACTIVE_SHADOW};
  }
`;
