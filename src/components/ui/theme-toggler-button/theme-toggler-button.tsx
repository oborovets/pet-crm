"use client";

import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/lib/theme-context";

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
