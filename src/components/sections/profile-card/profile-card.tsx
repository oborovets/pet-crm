'use client';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import {
  Typography,
  Avatar,
  Box,
  TextField,
  IconButton,
} from '@/components/common';

type Props = {
  userImage?: string | null;
  userName?: string | null;
  role?: string | null;
};

export default function ProfileCard({ userImage, userName, role }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [userRole, setUserRole] = useState(role);
  const toggleEditing = () => setIsEditing((prev) => !prev);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        position: 'relative',
        top: '-65px',
      }}
    >
      <Avatar
        src={userImage ?? 'U'}
        sx={{
          backgroundColor: 'white',
          border: '15px solid white',
          height: '128px',
          width: '128px',
        }}
      />
      <Typography variant="h3">{userName}</Typography>
      <Box display="flex" alignItems="center" height={35}>
        {isEditing ? (
          <TextField
            fullWidth
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          />
        ) : (
          <Typography variant="h5">{userRole}</Typography>
        )}
        <IconButton
          sx={{ position: 'relative', left: 5 }}
          onClick={toggleEditing}
        >
          <CreateIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1" display="inline-block">
          Joined April 2024
        </Typography>
      </Box>
    </Box>
  );
}
