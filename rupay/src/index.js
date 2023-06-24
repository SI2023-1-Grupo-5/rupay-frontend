import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/ui/theme/theme';
import { CssBaseline } from '@mui/material';
import { GlobalStyle } from './ui/theme/global';


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
