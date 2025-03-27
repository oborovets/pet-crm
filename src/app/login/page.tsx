import { Alert, AlertTitle, Box } from "@mui/material";
import { Typography } from "@/components/ui/common";
import LoginComponent from "@/components/ui/login/login";

type PageProps = {
  searchParams?: Record<string, string | string[]>;
};

export default function Login({ searchParams }: PageProps) {
  const isUnauthorized = searchParams?.unauthorized === "true";

  return (
    <Box>
      {isUnauthorized && (
        <Alert severity="warning">
          <AlertTitle>Access Denied</AlertTitle>
          You must be signed in to view this page. Please log in to continue.
        </Alert>
      )}
      <Typography sx={{ textAlign: "center", my: 3 }} variant="h3">
        Login
      </Typography>
      <LoginComponent />
    </Box>
  );
}
