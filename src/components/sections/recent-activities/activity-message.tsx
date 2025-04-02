import { Avatar } from '@mui/material';
import { Box, Typography } from '../../common';

type Props = {
  sender: string;
  message: string;
  time: string;
  date: string;
};

export default function ActivitiesMessage({
  sender,
  message,
  time,
  date,
}: Props) {
  return (
    <Box py={2} sx={{ cursor: 'pointer' }}>
      <Box display="flex" justifyContent="space-between" gap={1}>
        <Box display="flex" gap={2} alignItems="center">
          <Avatar sx={{ alignSelf: 'flex-start' }}>{sender.slice(0, 2)}</Avatar>
          <Box>
            <Typography variant="body1">{sender}</Typography>
            <Typography variant="body2">{message}</Typography>
          </Box>
        </Box>
        <Box textAlign="right" minWidth={75}>
          <Typography variant="body1">{time}</Typography>
          <Typography variant="body2">{date}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
