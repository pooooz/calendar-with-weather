import styled from 'styled-components';

const WHITE_COLOR = '#FFFFFF';
const RED_COLOR = '#FF0000';

const TEXT_SHADOW_COLOR = 'rgba(0, 0, 0, 1)';
const SIGN_IN_BUTTON_COLOR = '#5ece7b';
const SIGN_IN_BUTTON_COLOR_HOVER = '#336c41';
const SIGN_OUT_BUTTON_COLOR = '#e51010';
const SIGN_OUT_BUTTON_COLOR_HOVER = '#7a0606';
const GET_NEWS_BUTTON_COLOR = '#326265';
const GET_NEWS_BUTTON_COLOR_HOVER = '#253e41';

const BUTTON_BOX_SHADOW = '0 5px 10px rgba(0, 0, 0, 0.3)';

const EVENTS_WRAP_MIN_HEIGHT = 230;
const EVENTS_WRAP_TABLET_MIN_HEIGHT = 200;

export const EventsWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: ${EVENTS_WRAP_MIN_HEIGHT}px;
  padding: ${({ theme }) => theme.spaces.xs}% ${({ theme }) => theme.spaces.m}%;
  text-shadow: 0 0 8px ${TEXT_SHADOW_COLOR};

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-height: ${EVENTS_WRAP_TABLET_MIN_HEIGHT}px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface AuthButtonProps {
  isSignIn?: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  cursor: pointer;
  margin: 0 ${({ theme }) => theme.spaces.l}px 0;
  padding: ${({ theme }) => theme.spaces.s}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  background: ${({ isSignIn = false }) =>
    isSignIn ? SIGN_IN_BUTTON_COLOR : SIGN_OUT_BUTTON_COLOR};
  text-transform: uppercase;
  color: ${WHITE_COLOR};
  border: none;
  transition: background-color 400ms;

  &:hover {
    background: ${({ isSignIn = false }) =>
      isSignIn ? SIGN_IN_BUTTON_COLOR_HOVER : SIGN_OUT_BUTTON_COLOR_HOVER};
  }

  &:active {
    box-shadow: ${BUTTON_BOX_SHADOW};
  }
`;

export const GetEventsButton = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces.s}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  background: ${GET_NEWS_BUTTON_COLOR};
  text-transform: uppercase;
  color: ${WHITE_COLOR};
  border: none;
  transition: background-color 400ms;

  &:hover {
    background: ${GET_NEWS_BUTTON_COLOR_HOVER};
  }

  &:active {
    box-shadow: ${BUTTON_BOX_SHADOW};
  }
`;

export const ErrorHeading = styled.h4`
  color: ${RED_COLOR};
`;
