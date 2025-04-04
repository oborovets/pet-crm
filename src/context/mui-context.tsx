'use client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/styles/theme';

export default function MUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
