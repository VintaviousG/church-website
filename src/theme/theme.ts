// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0DAD', // Purple
    },
    secondary: {
      main: '#FFD700', // Gold
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
  },
});

export default theme;

