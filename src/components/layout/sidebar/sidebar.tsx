"use client";
import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

import { ThemeToggleButton, Button } from "../../common";

export default function Sidebar() {
  const ref = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "start",
    backgroundColor: "background.default",
    height: "100vh",
    borderRight: "1px solid white",
    px: 1,
  };

  const drawerSX = {
    position: "fixed",
    transition: "width 0.3s ease",
    overflowX: "hidden",
  };

  useEffect(() => {
    if (ref.current) {
      const el = ref.current;
      if (isSidebarOpen) {
        el.style.width = `${el.scrollWidth}px`;
      } else {
        el.style.width = "64px";
      }
    }
  }, [isSidebarOpen]);

  const onToggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const text = isSidebarOpen ? "Hide" : "Show";
  const Icon = isSidebarOpen ? MenuOpenIcon : MenuIcon;

  return (
    <Box ref={ref} sx={{ ...sx, ...drawerSX }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <Button
          onClick={onToggleSidebar}
          tooltipText={text}
          asIconButton={!isSidebarOpen}
          icon={Icon}
          isTooltipVisible={!isSidebarOpen}
        >
          {text}
        </Button>
        <ThemeToggleButton
          asIconButton={!isSidebarOpen}
          isTooltipVisible={!isSidebarOpen}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          minHeight: "200px",
        }}
      >
        <Button
          asLink
          href="/"
          tooltipText="Root Page"
          asIconButton={!isSidebarOpen}
          icon={DashboardIcon}
          isTooltipVisible={!isSidebarOpen}
        >
          Root Page
        </Button>
        <Button
          asLink
          href="/dashboard"
          tooltipText="Dashboard"
          asIconButton={!isSidebarOpen}
          icon={AddModeratorIcon}
          isTooltipVisible={!isSidebarOpen}
        >
          Dashboard
        </Button>
      </Box>
    </Box>
  );
}
