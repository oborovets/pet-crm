import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Box } from '@/components/common';
import Navbar from '@/components/layout/navbar/navbar';
import Sidebar from '@/components/layout/sidebar/sidebar';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/styles/theme';
import Providers from './providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { auth } from '../../auth';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'CRM',
  description: 'Small app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <CssBaseline />
            <Providers>
              <Navbar session={session} />
              <Sidebar />
              <Box
                sx={{
                  minHeight: '100vh',
                  py: {
                    lg: 8,
                    md: 4,
                  },
                  pl: { md: 10, lg: 18 },
                  pr: { md: 4 },
                }}
                bgcolor="#e7e7e7"
              >
                {children}
              </Box>
            </Providers>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
