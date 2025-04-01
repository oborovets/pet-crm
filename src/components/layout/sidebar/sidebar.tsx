'use client';
import { SvgIconProps } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import { Box, IconButton } from '../../common';

export default function Sidebar() {
  const iconSxProps = {
    color: 'primary',
    fontSize: {
      md: '1rem',
      lg: '2rem',
    },
  } as SvgIconProps['sx'];

  return (
    <Box
      top={0}
      borderRadius="0"
      height="100vh"
      bgcolor="#333"
      position="fixed"
      sx={{
        pt: {
          md: 6,
          lg: 11,
        },
        px: {
          md: 1,
          lg: 3,
        },
      }}
      px={(t) => t.spacing(2)}
    >
      <Box display="flex" flexDirection="column">
        <IconButton href="/" tooltipTitle="Root Page">
          <DashboardIcon sx={iconSxProps} />
        </IconButton>
        <IconButton href="/dashboard" tooltipTitle="Dashboard">
          <AddModeratorIcon sx={iconSxProps} />
        </IconButton>
      </Box>
    </Box>
  );
}
