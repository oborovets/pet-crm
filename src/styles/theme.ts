import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1440,
      lg: 1920,
      xl: 1920,
    },
  },
});

export default baseTheme;
