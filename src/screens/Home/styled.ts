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
  padding: 5% 7%;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ background }) => background});
  background-size: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  @media screen and ${({ theme }) => theme.device.mobileL} {
    min-width: 90%;
    min-height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;
