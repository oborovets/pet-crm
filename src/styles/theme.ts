import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Залишаємо як є
      sm: 500, // Змінюємо з 600px на 500px
      md: 1440, // Змінюємо з 900px на 800px
      lg: 1920, // Змінюємо з 1200px на 1100px
      xl: 1920, // Змінюємо з 1536px на 1400px
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
      `,
    },
  },
});

export const darkTheme = baseTheme;

export const lightTheme = baseTheme;
