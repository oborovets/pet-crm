'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Button, GoogleSvgIcon } from '../common';

type Props = {
  children?: React.ReactNode | string;
};

export default function GoogleOAuth({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const handleClick = async () => {
    const redirectTo = searchParams.get('callbackUrl') ?? '/dashboard';
    try {
      setLoading(true);

      await signIn('google', { redirectTo });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      sx={{ backgroundColor: 'white', color: 'black' }}
      loading={loading}
      icon={!loading && <GoogleSvgIcon />}
      iconPlacement="start"
      onClick={handleClick}
    >
      {children ? children : 'Sign Up With Google'}
    </Button>
  );
}
