'use client';
import {} from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import { signOut, signIn } from 'next-auth/react';

import { Button, Avatar, Box } from '../../common';
import { useSearchParams } from 'next/navigation';
import type { Session } from '../../../types/session';

type Props = {
  session?: Session;
};

export default function Navbar({ session }: Props) {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('callbackUrl') ?? '/';

  const isLoggedIn = !!session;

  return (
    <Box
      bgcolor="#333"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      borderRadius="0"
      px={(theme) => theme.spacing(3)}
      py={(theme) => theme.spacing(1.5)}
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
