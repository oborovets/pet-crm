import Link from "next/link";
import { Box, IconButton, Tooltip } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ThemeToggleButton from "../theme-toggler-button/theme-toggler-button";

export default function Sidebar() {
  const sx = {
    backgroundColor: "#1f1f1f",
    minWidth: "65px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRight: "1px solid white",
  };

  return (
    <Box sx={sx}>
      <Box>
        <ThemeToggleButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "200px",
        }}
      >
        <Link href="/dashboard">
          <Tooltip title="Dashboard" placement="right">
            <IconButton>
              <DashboardIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Link>
        <IconButton>
          <ModeNightIcon color="primary" />
        </IconButton>
        <IconButton>
          <ModeNightIcon color="primary" />
        </IconButton>
      </Box>
      <Box>
        <Tooltip title="Settings" placement="right">
          <IconButton>
            <SettingsIcon color="primary" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
