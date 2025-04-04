'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Divider, Menu, MenuItem, Stack } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import { Avatar, Box, Button, IconButton, Typography } from '../../common';

import type { Session } from '../../../types/session';

type Props = {
  session: Session | null;
};

export default function Navbar({ session }: Props) {
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const pathname = usePathname();

  const open = !!anchorEl;

  const isLoggedIn = !!session;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    setLoading(true);
    await signOut({ redirectTo: '/login' });
  };

  const UserAvatar = () => (
    <Avatar
      src={session?.user?.image ?? 'U'}
      sx={{
        height: '32px',
        width: '32px',
      }}
    />
  );

  const renderLeftSection = (isLoggedIn: boolean) => {
    const aboutUsLink = pathname !== '/' && (
      <Button
        variant="text"
        sx={{ color: 'white', position: 'relative', left: 100 }}
      >
        <Link href="/">About Us</Link>
      </Button>
    );

    const authorizedLinks = isLoggedIn && (
      <>
        <Button variant="text" sx={{ color: 'white' }}>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </>
    );

    return (
      <Stack direction="row" position="relative" left={100}>
        {authorizedLinks}
        {aboutUsLink}
      </Stack>
    );
  };

  const isLoginPage = pathname === '/login';
  return (
    <Box
      bgcolor="#333"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="0"
      px={4}
      height={48}
    >
      <Box>{renderLeftSection(isLoggedIn)}</Box>
      <Box>
        {isLoggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box display="flex" alignItems="center">
              <IconButton onClick={handleClick}>
                <UserAvatar />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              onClose={handleClose}
              open={open}
              sx={{ minWidth: '240px' }}
            >
              <MenuItem
                disableRipple
                sx={{ ':hover': { background: 'none', cursor: 'auto' } }}
              >
                <Typography variant="body2">Account</Typography>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{
                  display: 'flex',
                  gap: 1,
                  ':hover': { background: 'none', cursor: 'auto' },
                }}
              >
                <UserAvatar />
                <Box>
                  <Typography variant="body1">{session?.user?.name}</Typography>
                  <Typography variant="body2">
                    {session?.user?.email}
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem
                onClick={() => handleClose()}
                sx={{
                  mb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '2.5rem',
                }}
              >
                <Link href="/profile">Manage Account</Link>
                <OpenInNew fontSize="small" />
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleSignOut} sx={{ height: '2.5rem' }}>
                {loading ? (
                  <Typography variant="body1" color="grey">
                    Processing...
                  </Typography>
                ) : (
                  <Typography variant="body1">Logout</Typography>
                )}
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          !isLoginPage && (
            <Button size="small">
              <Link href="/login">Get Started</Link>
            </Button>
          )
        )}
      </Box>
    </Box>
  );
}
