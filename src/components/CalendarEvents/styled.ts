import styled from 'styled-components';

const textShadowColor = 'rgba(0, 0, 0, 1)';
const signInButtonColor = '#5ece7b';
const signInButtonColorHover = '#336c41';
const signOutButtonColor = '#e51010';
const signOutButtonColorHover = '#7a0606';
const getNewsButtonColor = '#326265';
const getNewsButtonColorHover = '#253e41';

export const EventsWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 230px;
  padding: 1% 7%;
  text-shadow: 0 0 8px ${textShadowColor};

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-height: 200px;
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
  margin: 0 10px 0;
  padding: 5px;
  border-radius: 15px;
  background: ${({ isSignIn = false }) =>
    isSignIn ? signInButtonColor : signOutButtonColor};
  text-transform: uppercase;
  color: white;
  border: none;
  transition: background-color 400ms;

  &:hover {
    background: ${({ isSignIn = false }) =>
      isSignIn ? signInButtonColorHover : signOutButtonColorHover};
  }

  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const GetEventsButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border-radius: 15px;
  background: ${getNewsButtonColor};
  text-transform: uppercase;
  color: white;
  border: none;
  transition: background-color 400ms;

  &:hover {
    background: ${getNewsButtonColorHover};
  }

  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ErrorHeading = styled.h4`
  color: red;
`;
