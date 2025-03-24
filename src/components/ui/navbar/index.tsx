"use client";

import { useSession } from "next-auth/react";

import NavbarComponent from "./navbar";

export default function Navbar() {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return (
    <NavbarComponent
      session={session}
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
    />
  );
}
