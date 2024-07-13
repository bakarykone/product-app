import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: '#1976d2',
    },
    body1: {
      color: '#555555',
    },
  },
});

export default theme;
