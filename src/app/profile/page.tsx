import { Box } from '@/components/common';
import { auth } from '../../../auth';
import { ProfileCard } from '@/components/sections';

export default async function Profile() {
  const session = await auth();

  return (
    <div>
      <Box display="flex" gap={6}>
        <Box display="flex" flexDirection="column" bgcolor="blue" width="50%">
          <Box p={2} bgcolor="white">
            <Box height="200px" bgcolor="green"></Box>
            <ProfileCard
              userImage={session?.user?.image}
              userName={session?.user?.name}
              role="React & NextJS Engineer"
            />
            <Box height="200px" textAlign="center"></Box>
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
