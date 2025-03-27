import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

export const darkTheme = createTheme({
  ...baseTheme,
  shape: {
    ...baseTheme.shape,
    borderRadius: 10,
  },
  palette: {
    ...baseTheme.palette,
    mode: 'dark',
    primary: {
      main: '#ddd', // світло-блакитний (MUI default)
      contrastText: '#0d1117',
    },
    secondary: {
      main: '#f48fb1', // рожевий (акценти, кнопки)
      contrastText: '#0d1117',
    },
    background: {
      default: '#141b2e', // темно-сірий/майже чорний
      paper: '#161b22', // трохи світліший, для карток
    },
    text: {
      primary: '#e6edf3', // світло-сірий (основний текст)
      secondary: '#8b949e', // сірий (пояснення, вторинне)
      disabled: '#6e7681',
    },
    divider: 'rgba(255,255,255,0.1)',

    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  shape: {
    ...baseTheme.shape,
    borderRadius: 10,
  },
  palette: {
    ...baseTheme.palette, // наслідуємо всі кольори

    mode: 'light',
    primary: {
      main: '#141b2e', // фірмовий MUI-синій, можна змінити
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // фіолетовий акцент
      contrastText: '#ffffff',
    },
    background: {
      default: '#aaa', // світло-сірий бекграунд всієї сторінки
      paper: '#ffffff', // білий бекграунд карток, модалок
    },
    text: {
      primary: '#1e1e1e', // насичений чорний
      secondary: '#555555', // менш контрастний для вторинного тексту
      disabled: '#9e9e9e',
    },
    divider: 'rgba(0, 0, 0, 0.12)',

    error: {
      main: '#e53935',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
});
