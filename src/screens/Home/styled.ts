import styled from 'styled-components';

export const Header = styled.header`
  padding: 5% 7% 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

interface WeatherBackgroundProps {
  background: string;
}
export const WeatherBackground = styled.div<WeatherBackgroundProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

interface DataWrapProps {
  background: string;
}
export const DataWrap = styled.section<DataWrapProps>`
  min-width: 75%;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ background }) => background});
  background-size: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  @media screen and ${({ theme }) => theme.device.laptop} {
    min-width: 95%;
    min-height: 90%;
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-width: 90%;
    min-height: 100%;
  }
`;

export const Footer = styled.footer`
  padding: 1% 7%;
  background: rgba(7, 4, 31, 0.57);

  @media screen and ${({ theme }) => theme.device.laptop} {
    padding: 1% 4%;
  }
`;
