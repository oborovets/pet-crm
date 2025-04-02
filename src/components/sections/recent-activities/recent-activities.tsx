import { Divider } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Box, Typography } from '../../common';
import ActivityMessage from './activity-message';

export default function RecentActivities() {
  return (
    <Box p={4} bgcolor="white" borderRadius={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={1}
        paddingBottom={2}
      >
        <Typography variant="h5">Recent Acivities</Typography>
        <NotificationsActiveOutlinedIcon fontSize="large" />
      </Box>
      <Divider sx={{ marginBottom: 2 }} />
      {data.map((item) => (
        <ActivityMessage key={`${item.sender}_${item.message}`} {...item} />
      ))}
    </Box>
  );
}

const data = [
  {
    sender: 'Alice Johnson',
    message: 'Meeting moved to next week',
    time: '9:45 AM',
    date: 'Monday',
  },
  {
    sender: 'Brian Lee',
    message: 'Can we review this today?',
    time: '2:10 PM',
    date: 'Tuesday',
  },
  {
    sender: 'Chloe Kim',
    message: 'Report ready for submission',
    time: '11:30 AM',
    date: 'Wednesday',
  },
  {
    sender: 'Daniel Smith',
    message: "Let's catch up tomorrow morning",
    time: '4:00 PM',
    date: 'Thursday',
  },
];
