'use client';
import { SvgIconProps } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import { Box, IconButton } from '../../common';

export default function Sidebar() {
  const iconProps = {
    color: 'primary',
    fontSize: 'large',
  } as Partial<SvgIconProps>;

  return (
    <Box
      top={0}
      borderRadius="0"
      height="100vh"
      bgcolor="#333"
      position="fixed"
      pt={(t) => t.spacing(11)}
      px={(t) => t.spacing(2)}
    >
      <Box display="flex" flexDirection="column">
        <IconButton href="/" tooltipTitle="Root Page">
          <DashboardIcon {...iconProps} />
        </IconButton>
        <IconButton href="/dashboard" tooltipTitle="Dashboard">
          <AddModeratorIcon {...iconProps} />
        </IconButton>
      </Box>
    </Box>
  );
}
