import styled from 'styled-components';

export const WeatherItemWrapLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  @media screen and ${({ theme }) => theme.device.tablet} {
    margin: 0 0 6% 0;
  }
`;

export const WeatherItemWrapDiv = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-grow: 1;
  }
`;

export const Icon = styled.img`
  @media screen and ${({ theme }) => theme.device.tablet} {
    width: 50px;
    height: 50px;
  }
`;

export const ActualIcon = styled.img`
  @media screen and ${({ theme }) => theme.device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const DayInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 5% 0 0 0;

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`;

export const TodayInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  align-items: center;
  margin: 0 0 0 5%;

  @media screen and ${({ theme }) => theme.device.tablet} {
    height: 70%;
  }
`;

export const Weekday = styled.h4`
  text-align: center;
  text-transform: uppercase;
  background: rgba(13, 9, 38, 0.76);
  border-radius: 15px;
  font-weight: 300;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 13px;
  }
`;

export const Today = styled.h4`
  text-align: center;
  text-transform: uppercase;
  background: rgba(13, 9, 38, 0.76);
  border-radius: 15px;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 300;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
`;

export const Temperature = styled.h4`
  text-align: center;
  font-size: 32px;
  font-weight: 300;

  @media screen and ${({ theme }) => theme.device.tablet} {
    margin: 0 0 0 5%;
    font-size: 24px;
  }
`;

export const DayTemperature = styled.h4`
  text-align: center;
  font-size: 48px;
  font-weight: 300;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 32px;
  }
`;
