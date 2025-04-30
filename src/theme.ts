import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E4154B',
    },
    secondary: {
      main: '#0066CC',
    },
    error: {
      main: '#E63946',
    },
    warning: {
      main: '#E9C46A',
    },
    info: {
      main: '#19B4E3',
    },
    success: {
      main: '#3D5E3C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },
    },
  },
}); 