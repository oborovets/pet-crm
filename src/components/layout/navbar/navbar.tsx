'use client';
import { useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { Logout, AccountCircle, MoreVert } from '@mui/icons-material';
import { signOut } from 'next-auth/react';

import { Avatar, Box, IconButton } from '../../common';
import GoogleOAuth from '@/components/oauth-buttons/google-oauth';
import type { Session } from '../../../types/session';
import Link from 'next/link';

type Props = {
  session: Session | null;
};
// TODO: Convert to Server Component
export default function Navbar({ session }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
              <MenuItem onClick={() => handleClose()}>
                <AccountCircle />
                <Link href="/profile">Profile</Link>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={async () => {
                  handleClose();
                  await signOut({ redirectTo: '/login' });
                }}
              >
                <Logout />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <GoogleOAuth />
        )}
      </Box>
    </Box>
  );
}
