import styled from 'styled-components';

export const LocationWrap = styled.div`
  text-align: right;

  @media screen and ${({ theme }) => theme.device.tablet} {
    text-align: center;
    margin: 30px 0 0 0;
  }
`;

export const Place = styled.h2`
  font-size: 32px;
`;

export const Country = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const ErrorHeading = styled.h4`
  color: red;
`;
