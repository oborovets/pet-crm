import { Card as MUICard, CardHeader } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import { RecentActivities, Card } from '@/components/sections';

import { Box, Button, Typography } from '@/components/common';
import PieChart from '@/components/charts/pie';
import LineChart from '@/components/charts/line';

const HeaderTitle = () => (
  <Box>
    <Typography variant="h3">Monitor health of</Typography>
    <Typography variant="h3">your business</Typography>
    <Typography variant="body1">
      Control and analyze your data in the easiest way
    </Typography>
  </Box>
);

const commonCardSX = {
  borderRadius: '10px',
  padding: 1.5,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 6,
  },
};

const CardsList = () => {
  return (
    <>
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
        headerTitle="Completed"
        contentTitle="7"
        contentSubTitle="+1 since last week"
        icon={CheckIcon}
      />
      <Card
        headerTitle="Upcoming Tasks"
        contentTitle="3"
        contentSubTitle="2 due today"
        icon={EventIcon}
      />
    </>
  );
};

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', gap: 7 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <HeaderTitle />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 4,
            marginBottom: '20px',
          }}
        >
          <CardsList />
        </Box>
        <Box sx={{ display: 'flex', gap: 4, height: '300px' }}>
          <Box sx={{ flexGrow: 41 }}>
            <MUICard elevation={8} sx={commonCardSX}>
              <LineChart />
            </MUICard>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <MUICard elevation={8} sx={{ ...commonCardSX, height: '100%' }}>
              <CardHeader
                title={<Typography variant="h6">Tasks</Typography>}
                action={<Button>View Tasks</Button>}
              />
              <PieChart />
            </MUICard>
          </Box>
        </Box>
      </Box>
      <RecentActivities />
    </Box>
  );
}
