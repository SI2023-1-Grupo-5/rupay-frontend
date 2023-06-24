import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/ui/theme/theme';
import { CssBaseline } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; line-height: normal;
  }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-7xl: 26px;

/* Colors */
--color-darkslategray: #044569;
--color-white: #fff;

/* border radiuses */
--br-6xs: 7px;

}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
