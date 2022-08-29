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

export const SelectorButton = styled.button`
  cursor: pointer;
  background: #0c6d96;
  border: none;
  border-radius: 15px;
  padding: 5px;
  transition: background-color 400ms;

  &:hover {
    background: #094867;
  }

  &:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ErrorHeading = styled.h4`
  color: red;
`;
