import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
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

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust as needed
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
      <body className={roboto.className}>
        <ThemeModeProvider initialMode={themeMode}>
          <ThemeRegistry>
            <Providers>
              <Navbar session={session} />
              <Sidebar />
              <Box>
                <Box
                  sx={{
                    py: {
                      lg: 8,
                      md: 4,
                    },
                    pl: { md: 10, lg: 18 },
                  }}
                  bgcolor="#e7e7e7"
                >
                  {children}
                </Box>
              </Box>
            </Providers>
          </ThemeRegistry>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
