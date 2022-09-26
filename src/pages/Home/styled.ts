import styled from 'styled-components';

const FOOTER_BACKGROUND_COLOR = 'rgba(7, 4, 31, 0.57)';
const DATA_WRAP_SHADOW = '0 0 20px rgba(0, 0, 0, 1)';

const FULL = '100%';

export const Header = styled.header`
  padding: ${({ theme }) => theme.spaces.s}% ${({ theme }) => theme.spaces.m}% 0;
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
  height: ${FULL};
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
  box-shadow: ${DATA_WRAP_SHADOW};

  @media screen and ${({ theme }) => theme.device.laptop} {
    min-width: 95%;
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-width: 90%;
    min-height: ${FULL};
  }
`;

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spaces.xs}% ${({ theme }) => theme.spaces.m}%;
  background: ${FOOTER_BACKGROUND_COLOR};

  @media screen and ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.spaces.xs}% 4%;
  }
`;
