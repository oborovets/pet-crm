import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";

import Navbar from "@/components/layout/navbar/navbar";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { Box } from "@/components/common";

import Providers from "./providers";

import { ThemeRegistry } from "../styles";
import { ThemeModeProvider } from "@/styles";
import { auth } from "../../auth";
import type { ThemeMode } from "@/types/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);

  const themeMode = (cookieStore.get("theme")?.value ?? "light") as ThemeMode;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeModeProvider initialMode={themeMode}>
          <ThemeRegistry>
            <Providers>
              <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box sx={{ width: "100%" }}>
                  <Navbar session={session} />
                  <Box sx={{ py: 5, px: 12 }}>{children}</Box>
                </Box>
              </Box>
            </Providers>
          </ThemeRegistry>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
