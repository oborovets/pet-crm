'use client';

import MUIProvider from './mui-context';

export default function RootProivder({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MUIProvider>{children}</MUIProvider>;
}
