'use client';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import { Box, IconButton } from '../../common';

export default function Sidebar() {
  return (
    <Box
      borderRadius="0"
      height="100vh"
      bgcolor="#333"
      display="flex"
      flexDirection="column"
      position="fixed"
    >
      <Box display="flex" flexDirection="column">
        <IconButton
          href="/"
          tooltipTitle="Root Page"
          icon={<DashboardIcon color="primary" />}
        >
          Root Page
        </IconButton>
        <IconButton
          href="/dashboard"
          tooltipTitle="Dashboard"
          icon={<AddModeratorIcon color="primary" />}
        >
          Dashboard
        </IconButton>
      </Box>
    </Box>
  );
}
