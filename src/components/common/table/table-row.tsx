'use client';
import { ReactNode } from 'react';
import { TableRow as MUITableRow, SxProps } from '@mui/material';

type Props = {
  onClick?: () => void;
  isRowClickable?: boolean;
  children: ReactNode[];
  urlParams?: Record<string, string>;
  sx?: SxProps;
};

export default function TableRow({
  sx,
  onClick,
  children,
  isRowClickable,
  urlParams,
}: Props) {
  const handleClick = () => {
    if (isRowClickable && typeof onClick === 'function') return onClick();
    const url = new URL(window.location.href);

    Object.entries(urlParams || {}).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });

    window.history.pushState({}, '', url.toString());
  };

  return (
    <MUITableRow hover onClick={handleClick} sx={sx}>
      {children}
    </MUITableRow>
  );
}
