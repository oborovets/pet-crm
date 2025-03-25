import { Box } from "@mui/material";

import { signIn } from "../../../../auth";

import { Button } from "../common";
import Menu from "../menu";

export default function Navbar({}: Props) {
  return (
    <Box
      component="nav"
      sx={{
        borderBottom: "1px solid #fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        py: 2,
        px: 5,
        backgroundColor: "background.default",
      }}
    >
      <Button
        onClick={async () => {
          "use server";
          await signIn("google");
        }}
      >
        Sign Up With Google
      </Button>
      <Menu />
    </Box>
  );
}
