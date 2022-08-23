import styled from 'styled-components';

export const Time = styled.span`
  font-size: 64px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: 48px;
  }
`;

export const DateString = styled.h3`
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: 16px;
  }
`;
