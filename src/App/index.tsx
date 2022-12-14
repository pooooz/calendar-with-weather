import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from 'pages/Home';

import { defaultTheme, GlobalStyles } from '../globalStyles';

export const App: FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);
