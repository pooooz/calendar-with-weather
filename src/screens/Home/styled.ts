import styled from 'styled-components';

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
  min-width: 70%;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ background }) => background});
  background-size: cover;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    min-width: 90%;
    min-height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;
