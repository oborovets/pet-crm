'use client';
import { useSession } from 'next-auth/react';
import MenuComponent from './menu';

export default function Menu() {
  const { status } = useSession();

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  return (
    <MenuComponent isLoading={isLoading} isAuthenticated={isAuthenticated} />
  );
}
