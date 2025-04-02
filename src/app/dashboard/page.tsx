import { Alert } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskIcon from '@mui/icons-material/Task';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { RecentActivities, Card } from '@/components/sections';

import { Box, Typography } from '@/components/common';
import PieChart from '@/components/charts/pie';
import LineChart from '@/components/charts/line';

export default function Dashboard() {
  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Alert severity="warning" sx={{ borderRadius: '12px' }}>
          <Typography variant="subtitle1">
            You haven&apos;t logged time for the past few days.
          </Typography>
        </Alert>
      </Box>
      <Box
        display="flex"
        sx={{
          height: '480px',
          gap: {
            lg: 4,
            md: 2,
          },
          my: 3,
        }}
      >
        <Box display="flex" flexWrap="wrap" gap={2} width="80%">
          <Card
            headerTitle="Tracked Hours"
            contentTitle="24"
            contentSubTitle="+3 last day"
            icon={AccessTimeIcon}
          />
          <Card
            headerTitle="Active Projects"
            contentTitle="3"
            contentSubTitle="One has pending status"
            icon={WorkOutlineIcon}
          />
          <Card
            headerTitle="Completed Tasks"
            contentTitle="7"
            contentSubTitle="+1 since last week"
            icon={CheckIcon}
          />
          <Card
            headerTitle="Upcoming Tasks"
            contentTitle="3"
            contentSubTitle="2 due today"
            icon={TaskIcon}
          />
          <Card
            headerTitle="Critical Issues"
            contentTitle="3"
            contentSubTitle="2 need immediate attention"
            icon={WarningAmberIcon}
          />

          <LineChart />
          <PieChart />
        </Box>
        <RecentActivities />
      </Box>
    </Box>
  );
}
