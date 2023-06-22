import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#03527E',
    },
    secondary: {
      main: '#46B9F9',
    },
    error: {
      main: red.A700,
    },
    background:{
      paper:'#fff',
      default:'#044569'
    },
  },
});

export default theme;