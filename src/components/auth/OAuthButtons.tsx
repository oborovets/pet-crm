"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/common";
import { useSearchParams } from "next/navigation";

export default function OAuthButtons() {
  const searchParams = useSearchParams();
  return (
    <Button
      onClick={() =>
        signIn("google", {
          redirectTo: searchParams.get("callbackUrl") ?? "/dashboard",
        })
      }
    >
      Sign Up With Google
    </Button>
  );
}
