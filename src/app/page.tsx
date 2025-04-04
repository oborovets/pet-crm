import { Box, Typography } from '@/components/common';
import GoogleOAuth from '@/components/oauth-buttons/google-oauth';
import { Divider } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Box
      display="flex"
      px="10%"
      pt="1%"
      gap={10}
      bgcolor="#ede9e4"
      borderRadius={10}
    >
      <Box width="50%">
        <Typography variant="h3">Manage Customer</Typography>
        <Typography variant="h3" sx={{ mb: '8px' }}>
          Relationships 🤩
        </Typography>
        <Typography variant="body1">
          Managing customer relationships can be challenging, but with our
          cutting-edge CRM application, you can streamline every interaction
          with ease. Designed for businesses of all sizes, our CRM provides
          powerful tools to keep your customer data organized, accessible, and
          actionable.
        </Typography>
        <Typography variant="h5" sx={{ mt: '16px' }}>
          🚀 Boost Your Team’s Efficiency
        </Typography>
        <Typography variant="body2">
          Our CRM automates repetitive tasks, allowing your team to focus on
          building stronger customer connections. The intuitive interface
          ensures that anyone on your team can start managing contacts, tracking
          deals, and following up on leads without a steep learning curve.
        </Typography>
        <Typography variant="h5" sx={{ mt: '16px' }}>
          🌍 Accessible Anytime, Anywhere
        </Typography>
        <Typography variant="body2">
          Whether in the office or on the go, our CRM is accessible from any
          device. Stay connected to your customers and your data, no matter
          where your work takes you.
        </Typography>
        <Typography variant="h5" sx={{ mt: '16px' }}>
          💬 Get Started Today!
        </Typography>
        <Typography variant="body2">
          Experience a CRM that adapts to your business needs. Sign up now for a
          free trial and see how easy customer relationship management can be.
        </Typography>
        <Box sx={{ mt: '16px' }}>
          <GoogleOAuth>
            <Typography>Get Started!</Typography>
          </GoogleOAuth>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box width="50%" display="flex" alignItems="center">
        <Image src="/logo_img.png" alt="logo" width={510} height={490} />
      </Box>
    </Box>
  );
}
