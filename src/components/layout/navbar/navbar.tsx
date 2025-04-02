'use client';
import { useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { Logout, Google, AccountCircle, MoreVert } from '@mui/icons-material';
import { signOut, signIn } from 'next-auth/react';

import { Button, Avatar, Box, IconButton } from '../../common';
import { useSearchParams } from 'next/navigation';
import type { Session } from '../../../types/session';
import Link from 'next/link';

type Props = {
  session: Session | null;
};

export default function Navbar({ session }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get('callbackUrl') ?? '/';
  const open = !!anchorEl;

  const isLoggedIn = !!session;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      bgcolor="#333"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      borderRadius="0"
      sx={{
        px: {
          md: 5,
        },
        py: {
          md: 1,
          lg: 2.5,
        },
      }}
    >
      <Box>
        {isLoggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box display="flex">
              <Avatar src={session?.user?.image ?? 'U'} />
              <IconButton onClick={handleClick}>
                <MoreVert />
              </IconButton>
            </Box>
            <Menu
              sx={{
                padding: (t) => t.spacing(0, 12),
              }}
              anchorEl={anchorEl}
              onClose={handleClose}
              id="account-menu"
              open={open}
            >
              <MenuItem>
                <AccountCircle />
                <Link href="/profile">Profile</Link>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOut();
                }}
              >
                <Logout />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            variant="outlined"
            icon={<Google />}
            onClick={() => signIn('google', { redirectTo })}
          >
            Sign Up With Google
          </Button>
        )}
      </Box>
    </Box>
  );
}

// <Button onClick={() => signOut({ redirectTo: '/' })}>Log Out</Button>;
/* 
sx={{
        py: (t) => ({ [t.breakpoints.down('md')]: t.spacing(10) }),
        px: (t) => ({ [t.breakpoints.down('md')]: t.spacing(10) }),
}}
*/
