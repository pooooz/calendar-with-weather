import styled from 'styled-components';

const SELECTOR_BUTTON_BORDER_RADIUS = 15;

const RED_COLOR = '#FF0000';
const SELECTOR_BUTTON_BACKGROUND_COLOR = '#0c6d96';
const SELECTOR_BUTTON_HOVER_BACKGROUND_COLOR = '#094867';
const SELECTOR_BUTTON_ACTIVE_SHADOW = '0 5px 10px rgba(0, 0, 0, 0.3)';

export const LocationWrap = styled.div`
  text-align: right;

  @media screen and ${({ theme }) => theme.device.tablet} {
    text-align: center;
    margin: ${({ theme }) => theme.spaces.xl}px 0 0 0;
  }
`;

export const Place = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
`;

export const Country = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: 600;
`;

export const SelectorButton = styled.button`
  cursor: pointer;
  background: ${SELECTOR_BUTTON_BACKGROUND_COLOR};
  border: none;
  border-radius: ${SELECTOR_BUTTON_BORDER_RADIUS}px;
  padding: ${({ theme }) => theme.spaces.s}px;
  transition: background-color 400ms;

  &:hover {
    background: ${SELECTOR_BUTTON_HOVER_BACKGROUND_COLOR};
  }

  &:active {
    box-shadow: ${SELECTOR_BUTTON_ACTIVE_SHADOW};
  }
`;

export const ErrorHeading = styled.h4`
  color: ${RED_COLOR};
`;
