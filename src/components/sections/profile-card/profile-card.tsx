'use client';
import { Typography, Avatar, Box } from '@/components/common';

type Props = {
  userImage?: string | null;
  userName?: string | null;
  role?: string | null;
};

export default function ProfileCard({ userImage, userName, role }: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        position: 'relative',
        top: '-50px',
      }}
    >
      <Avatar
        src={userImage ?? 'U'}
        sx={{
          backgroundColor: 'white',
          border: '15px solid white',
          height: '96px',
          width: '96px',
        }}
      />
      <Typography variant="h4">{userName}</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={35}
      >
        <Typography variant="h6">{role}</Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1" display="inline-block">
          Joined April 2024
        </Typography>
      </Box>
    </Box>
  );
}
