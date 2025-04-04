import { Box, Typography } from '@/components/common';
import { auth } from '../../../auth';
import { ProfileCard, ExperienceCard } from '@/components/sections';

export default async function Profile() {
  const session = await auth();

  return (
    <Box display="flex" gap={6}>
      <Box display="flex" flexDirection="column" width="50%" gap={3}>
        <Box p={1.5} bgcolor="white" borderRadius={6}>
          <Box height="140px" bgcolor="green" borderRadius={3} />
          <ProfileCard
            userImage={session?.user?.image}
            userName={session?.user?.name}
            role="React & NextJS Engineer"
          />
        </Box>
        <ExperienceCard />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="grey"
        borderRadius={6}
        width="50%"
        maxHeight={365}
        textAlign="center"
      >
        <Typography variant="h5" color="white">
          In progress...
        </Typography>
      </Box>
    </Box>
  );
}
