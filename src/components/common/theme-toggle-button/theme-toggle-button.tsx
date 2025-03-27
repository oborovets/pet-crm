"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/styles";
import { Button } from "..";

export default function ThemeToggleButton({
  asIconButton = false,
  isTooltipVisible = false,
}: {
  asIconButton?: boolean;
  isTooltipVisible?: boolean;
}) {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";
  const text = isDark ? "Light" : "Dark";

  return (
    <Button
      tooltipText={text}
      asIconButton={asIconButton}
      onClick={toggleTheme}
      icon={isDark ? LightModeIcon : DarkModeIcon}
      isTooltipVisible={isTooltipVisible}
    >
      {text}
    </Button>
  );
}
