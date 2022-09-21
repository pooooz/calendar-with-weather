import styled from 'styled-components';

const TEXT_SHADOW = '0 0 8px rgba(0, 0, 0, 0.8)';

export const Time = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  text-shadow: ${TEXT_SHADOW};

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const DateString = styled.h3`
  text-shadow: ${TEXT_SHADOW};

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;
