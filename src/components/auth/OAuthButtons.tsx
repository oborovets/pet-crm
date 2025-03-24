import { signIn } from "next-auth/react";
import Button from "../ui/Button";

export default function OAuthButtons() {
  return <Button onClick={() => signIn("google")}>Sign Up With Google</Button>;
}
