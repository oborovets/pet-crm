import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import { RecentActivities, Card } from '@/components/sections';

import { Box, Typography } from '@/components/common';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', gap: 7 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h3">Monitor health of</Typography>
          <Typography variant="h3">your business</Typography>
          <Typography variant="body1">
            Control and analyze your data in the easiest way
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 7,
            marginBottom: '20px',
            width: '75%',
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
        </Box>
      </Box>
      <RecentActivities />
    </Box>
  );
}
