"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { emotionCache, useThemeMode } from ".";

import createEmotionServer from "@emotion/server/create-instance";
import { useServerInsertedHTML } from "next/navigation";

import { darkTheme, lightTheme } from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useThemeMode();

  const [cache] = React.useState(() => emotionCache());
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  useServerInsertedHTML(() => {
    const chunks = extractCriticalToChunks("");
    return (
      <style
        data-emotion={`css ${chunks.styles
          .map((style) => style.key)
          .join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: constructStyleTagsFromChunks(chunks),
        }}
      />
    );
  });
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
