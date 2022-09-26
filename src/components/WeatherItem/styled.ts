import styled from 'styled-components';

const DAY_BACKGROUND_COLOR = 'rgba(13, 9, 38, 0.76)';

const ITEM_FONT_WEIGHT = 300;

const FULL = '100%';
const HALF = '50%';

export const WeatherItemWrapLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  @media screen and ${({ theme }) => theme.device.tablet} {
    margin: 0 0 ${({ theme }) => theme.spaces.m}% 0;
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
  width: ${({ theme }) => theme.iconSizes.small.basic}px;
  height: ${({ theme }) => theme.iconSizes.small.basic}px;
  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.small.tablet}px;
    height: ${({ theme }) => theme.iconSizes.small.tablet}px;
  }
`;

export const ActualIcon = styled.img`
  width: ${({ theme }) => theme.iconSizes.large.basic}px;
  height: ${({ theme }) => theme.iconSizes.large.basic}px;
  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.large.tablet}px;
    height: ${({ theme }) => theme.iconSizes.large.tablet}px;
  }
`;

export const DayInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${FULL};
  margin: ${({ theme }) => theme.spaces.s}% 0 0 0;

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`;

export const TodayInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${FULL};
  align-items: center;
  margin: 0 0 0 ${({ theme }) => theme.spaces.s}%;

  @media screen and ${({ theme }) => theme.device.tablet} {
    height: ${HALF};
  }
`;

export const Weekday = styled.h4`
  text-align: center;
  text-transform: uppercase;
  background: ${DAY_BACKGROUND_COLOR};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  font-weight: ${ITEM_FONT_WEIGHT};

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const Today = styled.h4`
  text-align: center;
  text-transform: uppercase;
  background: ${DAY_BACKGROUND_COLOR};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  padding: 0 ${({ theme }) => theme.spaces.l}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${ITEM_FONT_WEIGHT};

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const Temperature = styled.h4`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${ITEM_FONT_WEIGHT};

  @media screen and ${({ theme }) => theme.device.tablet} {
    margin: 0 0 0 ${({ theme }) => theme.spaces.s}%;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const DayTemperature = styled.h4`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${ITEM_FONT_WEIGHT};

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;
