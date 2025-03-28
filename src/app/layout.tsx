import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';

import { Box } from '@/components/common';
import Navbar from '@/components/layout/navbar/navbar';
import Sidebar from '@/components/layout/sidebar/sidebar';

import Providers from './providers';

import { ThemeModeProvider } from '@/styles';
import type { ThemeMode } from '@/types/theme';
import { auth } from '../../auth';
import { ThemeRegistry } from '../styles';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);

  const themeMode = (cookieStore.get('theme')?.value ?? 'light') as ThemeMode;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeModeProvider initialMode={themeMode}>
          <ThemeRegistry>
            <Providers>
              <Box
                sx={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Navbar session={session} />
                <Box sx={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                  <Sidebar />
                  <Box
                    sx={{
                      flex: 1,
                      pl: 15,
                      pt: 5,
                      backgroundColor: 'grey.500',
                    }}
                  >
                    {children}
                  </Box>
                </Box>
              </Box>
            </Providers>
          </ThemeRegistry>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
