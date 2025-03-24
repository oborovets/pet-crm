"use client";
import { useState } from "react";

import {
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";

import { signIn, signOut } from "next-auth/react";

import Button from "../Button";
import Avatar from "../avatar";

interface Props {
  isLoading: boolean;
  isAuthenticated: boolean;
  session: { user: { name: string; image: string } };
}

export default function Navbar({ isLoading, isAuthenticated, session }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (isLoading) return null;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // const userName = session?.user?.name;
  const userImage = session?.user?.image ?? ""; // TODO: Change to some default image

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
      {!isAuthenticated && (
        <Button onClick={() => signIn("google")}>Sign Up With Google</Button>
      )}
      {isAuthenticated && (
        <>
          <Tooltip title="Account Settings">
            <IconButton onClick={handleClick}>
              <Avatar alt="avatar" srcSet={userImage} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Typography>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Settings</Typography>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                signOut();
              }}
            >
              <Typography>Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
}
