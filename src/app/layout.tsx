import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Navbar from '@/components/layout/navbar/navbar';

import RootProivder from '@/context/root-provider';

import { auth } from '../../auth';

import './globals.css';
import { Container } from '@mui/material';

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
      <body
        className={roboto.className}
        style={{
          minHeight: '100vh',
          width: 'auto',
          backgroundColor: '#ede9e4',
        }}
      >
        <RootProivder>
          <Navbar session={session} />
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {children}
          </Container>
        </RootProivder>
      </body>
    </html>
  );
}
