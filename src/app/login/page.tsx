import { Alert, AlertTitle, Box } from "@mui/material";
import { Typography } from "@/components/ui/common";

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
      <Typography variant="h3">Login{isUnauthorized}</Typography>
    </Box>
  );
}
