import { Alert, AlertTitle, Box } from '@mui/material';
import { Typography } from '@/components/common';
import LoginComponent from '@/components/ui/login/login';

type PageProps = {
  searchParams?: Promise<{ unauthorized: string }> | undefined;
};

export default async function Login({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const isUnauthorized = resolvedSearchParams?.unauthorized === 'true';

  return (
    <Box sx={{ mt: '7%' }}>
      {isUnauthorized && (
        <Alert severity="warning">
          <AlertTitle>Access Denied</AlertTitle>
          You must be signed in to view this page. Please log in to continue.
        </Alert>
      )}
      <Typography sx={{ textAlign: 'center', my: 3 }} variant="h3">
        Login
      </Typography>
      <LoginComponent />
    </Box>
  );
}
