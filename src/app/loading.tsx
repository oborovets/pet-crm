import { CircularProgress, Box } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
      }}
    >
      <CircularProgress color="primary" size="4rem" />
    </Box>
  );
}
