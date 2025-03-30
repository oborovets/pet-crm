import { Box, Typography, Avatar, Button } from '@/components/common';

export default function Profile() {
  return (
    <div>
      <Box display="flex" gap={6}>
        <Box display="flex" flexDirection="column" bgcolor="blue" width="50%">
          <Box p={2} bgcolor="white">
            <Box height="200px" bgcolor="green"></Box>
            <Box height="200px" textAlign="center">
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
                  sx={{
                    border: '15px solid white',
                    height: '128px',
                    width: '128px',
                  }}
                />
                <Typography variant="h3">User Name</Typography>
                <Typography variant="h5">Role</Typography>
                <Box display="flex">
                  <Typography variant="h6" display="inline-block">
                    Speciality
                  </Typography>
                  <Typography
                    variant="h6"
                    display="inline-block"
                    sx={{ px: '8px' }}
                  >
                    |
                  </Typography>
                  <Typography variant="h6" display="inline-block">
                    Joined 2024 April
                  </Typography>
                </Box>
                <Box>
                  <Button>Go to?</Button>
                  <Button>Edit Profile</Button>
                </Box>
                <Box>
                  <Button>Go to?</Button>
                  <Button>Edit Profile</Button>
                </Box>
                <Box>
                  <Button>Go to?</Button>
                  <Button>Edit Profile</Button>
                </Box>
                <Box>
                  <Button>Go to?</Button>
                  <Button>Edit Profile</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" bgcolor="red" width="50%">
          <Box height="200" width="100%" bgcolor="green">
            <h3>Hello world</h3>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
