'use client';
import { useState, useEffect } from 'react';
import { Divider, LinearProgress } from '@mui/material';
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

  return (
    <Box
      sx={{
        width: '25%',
        opacity: ticketId ? '1' : '0',
        transition: 'opacity .3s ease',
      }}
    >
      <Box sx={{ height: 64, display: 'flex', alignItems: 'center' }}>
        <Typography display="block" variant="h5">
          Ticket Details
        </Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          bgcolor: 'white',
          borderRadius: 2,
        }}
      >
        {ticket?.description && (
          <Box sx={{ opacity: loading ? 0.5 : 1 }}>
            <Typography>Ticket Number {ticket.id}</Typography>
            <Box sx={{ width: '100%', my: 1 }}>
              {loading ? (
                <LinearProgress sx={{ opacity: 1 }} />
              ) : (
                <Divider sx={{ height: 4 }} />
              )}
            </Box>

            <Typography variant="body2" sx={{ opacity: '.6' }}>
              {ticket.description}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
