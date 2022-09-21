import { createGlobalStyle, DefaultTheme } from 'styled-components';

const deviceWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
};

export const device = {
  mobileS: `(max-width: ${deviceWidth.mobileS}px)`,
  mobileM: `(max-width: ${deviceWidth.mobileM}px)`,
  mobileL: `(max-width: ${deviceWidth.mobileL}px)`,
  tablet: `(max-width: ${deviceWidth.tablet}px)`,
  laptop: `(max-width: ${deviceWidth.laptop}px)`,
  laptopL: `(max-width: ${deviceWidth.laptopL}px)`,
  desktop: `(max-width: ${deviceWidth.desktop}px)`,
  desktopL: `(max-width: ${deviceWidth.desktop}px)`,
};

const spaces = {
  xs: 1,
  s: 5,
  m: 7,
  l: 10,
  xl: 30,
};

const fontSizes = {
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 64,
};

const sizes = {
  radius: 15,
};

const iconSizes = {
  small: {
    basic: 72,
    tablet: 50,
  },
  large: {
    basic: 144,
    tablet: 100,
  },
};

const WHITE_COLOR = '#FFFFFF';

const FULL = '100%';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${WHITE_COLOR};
    font-weight: 400;
  }
  
  html, body {
    height: ${FULL};
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  #root {
    position: relative;
    height: ${FULL};
  }
`;

export const defaultTheme: DefaultTheme = {
  device,
  sizes,
  spaces,
  fontSizes,
  iconSizes,
};
