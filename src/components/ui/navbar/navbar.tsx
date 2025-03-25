import { Box } from "@mui/material";

import { signIn } from "../../../../auth";

import Button from "../Button";
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
        padding: "1% 10%",
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
