'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Toolbar } from '@mui/material';
import { Typography, Button } from '..';

type Props = {
  title?: string | React.ReactNode;
};

const wait = async () =>
  new Promise((r) =>
    setTimeout(() => {
      r('');
    }, 350)
  );

export default function TableToolbar({ title }: Props) {
  const params = useSearchParams();
  const isTicketIdExist = !!params.get('ticketId');

  const [opacity, setOpacity] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const fn = async () => {
      await wait();
      if (isTicketIdExist) return setOpacity(1);

      setOpacity(0);
    };
    fn();
  }, [isTicketIdExist]);

  const handleClear = async () => {
    window.history.pushState({}, '', pathname);
  };
  const duration = '.8s';
  return (
    <Toolbar
      disableGutters
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {title && <Typography variant="h5">{title}</Typography>}
      <Button
        variant="outlined"
        size="small"
        disabled={!isTicketIdExist}
        onClick={handleClear}
        sx={{
          opacity,
          transition: `opacity ${duration} ease, color ${duration} ease, border ${duration} ease`,
        }}
      >
        Clear Filters
      </Button>
    </Toolbar>
  );
}
