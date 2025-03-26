import { Box } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import { signIn, signOut, auth } from "../../../../auth";

import { Button, Avatar } from "../common";

export default async function Navbar() {
  const session = await auth();

  const isLoggedIn = !!session;

  return (
    <Box
      component="nav"
      sx={{
        borderBottom: "1px solid #fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        py: 2,
        px: 10,
        backgroundColor: "background.default",
      }}
    >
      <Box>
        {isLoggedIn ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={session?.user?.image ?? undefined} />
            <Button
              onClick={async () => {
                "use server";
                await signOut();
              }}
            >
              Log Out
            </Button>
          </Box>
        ) : (
          <Button
            icon={GoogleIcon}
            onClick={async () => {
              "use server";
              await signIn("google");
            }}
          >
            Sign Up With Google
          </Button>
        )}
      </Box>
    </Box>
  );
}
