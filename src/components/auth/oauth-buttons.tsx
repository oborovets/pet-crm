'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '../common';
import { useSearchParams } from 'next/navigation';

export default function OAuthButtons() {
  const [loading] = useState(true);

  const searchParams = useSearchParams();
  return (
    <Button
      loading={loading}
      // disabled
      onClick={() =>
        signIn('google', {
          redirectTo: searchParams.get('callbackUrl') ?? '/dashboard',
        })
      }
    >
      Sign Up With Google
    </Button>
  );
}
