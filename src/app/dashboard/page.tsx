import { Alert, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskIcon from '@mui/icons-material/Task';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { RecentActivities, Card } from '@/components/sections';

import { Box, Button, Typography } from '@/components/common';
import PieChart from '@/components/charts/pie';
import LineChart from '@/components/charts/line';

const HeaderTitle = () => (
  <Typography variant="h3" fontWeight="bold">
    Dashboard
  </Typography>
);

export default function Dashboard() {
  return (
    <Box
      display="flex"
      sx={{
        gap: {
          lg: 6,
          md: 3,
        },
      }}
    >
      <Box width={'75%'}>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <HeaderTitle />
          <Box
            bgcolor="grey.200"
            py={2}
            px={3}
            display="flex"
            justifyContent="space-between"
            gap={2}
          >
            <Button>Projects</Button>
            <Button>Tasks</Button>
            <Button>Notes</Button>
          </Box>
          <Alert severity="warning" sx={{ borderRadius: '12px', padding: 1 }}>
            <Typography variant="subtitle1">
              You haven&apos;t logged time for the past few days.
            </Typography>
          </Alert>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{
            gap: {
              lg: 4,
              md: 2,
            },
            my: 3,
          }}
        >
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
          <Box bgcolor="white">
            <LineChart />
          </Box>
          <Box bgcolor="white">
            <PieChart />
          </Box>
        </Box>
      </Box>
      <RecentActivities />
    </Box>
  );
}
