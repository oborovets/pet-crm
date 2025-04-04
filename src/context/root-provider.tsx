'use client';

import { LoadingProvider } from './loading-context';
import MUIProvider from './mui-context';

export default function RootProivder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <MUIProvider>{children}</MUIProvider>
    </LoadingProvider>
  );
}
