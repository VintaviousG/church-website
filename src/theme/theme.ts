// theme/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#f50057', // pink/red
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
