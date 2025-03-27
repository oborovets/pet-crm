'use client';
import { Box } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import { signOut, signIn } from 'next-auth/react';

import { Button, Avatar } from '../../common';
import { useSearchParams } from 'next/navigation';
import type { Session } from '../../../types/session';

type Props = {
  session: Session;
};

export default function Navbar({ session }: Props) {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('callbackUrl') ?? '/';

  const isLoggedIn = !!session;

  return (
    <Box
      component="nav"
      sx={{
        borderBottom: '1px solid #fff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        py: 2,
        px: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Box>
        {isLoggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={session?.user?.image ?? undefined} />
            <Button onClick={() => signOut({ redirectTo: '/' })}>
              Log Out
            </Button>
          </Box>
        ) : (
          <Button
            icon={GoogleIcon}
            onClick={() => signIn('google', { redirectTo })}
          >
            Sign Up With Google
          </Button>
        )}
      </Box>
    </Box>
  );
}
