"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import {
  Tooltip,
  IconButton,
  Menu as MUIMenu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";

interface Props {
  isLoading: boolean;
  isAuthenticated: boolean;
  session: { user: { name: string; image: string } };
}

export default function Menu({ isLoading, isAuthenticated, session }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (isLoading || !isAuthenticated) return null;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Account Settings">
        <IconButton onClick={handleClick}></IconButton>
      </Tooltip>
      <MUIMenu
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
      </MUIMenu>
    </>
  );
}
