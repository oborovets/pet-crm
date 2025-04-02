'use client';
import { useState, useEffect, useCallback } from 'react';
import { CircularProgress, Divider } from '@mui/material';
import { Box, Typography } from '../common';
import { useSearchParams } from 'next/navigation';

import { getTicket, Ticket } from '@/services/ticketServices';

export default function TicketDescription() {
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const ticketId = useSearchParams().get('ticketId');

  const fetchTicket = async (ticketId: string) => {
    setLoading(true);
    const response = await getTicket(ticketId);
    setTicket(response);
    setLoading(false);
  };

  useEffect(() => {
    if (ticketId) {
      fetchTicket(ticketId);
    }
  }, [ticketId]);

  const component = useCallback(() => {
    return loading ? (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0, 0.3)',
          opacity: 0.5,
          height: '100%',
        }}
      >
        <CircularProgress />
      </Box>
    ) : (
      <>
        <Typography variant="h5">Ticket Details</Typography>
        <Divider sx={{ my: 2 }} />
        {ticket?.description && (
          <Typography variant="body2">{ticket.description}</Typography>
        )}
      </>
    );
  }, [ticket, loading]);

  return (
    !!ticketId && (
      <Box sx={{ p: 2, bgcolor: 'white', width: '25%' }}>{component()}</Box>
    )
  );
}
