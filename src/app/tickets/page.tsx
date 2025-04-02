import TicketDescription from '@/components/ticket-description/ticket-discription';
import { Table, Box } from '@/components/common';

import { getTickets } from '@/services/ticketServices';

import type { TableColumn } from '@/types/table';

const columns: TableColumn[] = [
  { id: 'id', label: 'Task ID', minWidth: 80 },
  { id: 'title', label: 'Title', minWidth: 150 },
  { id: 'status', label: 'Status', minWidth: 100, align: 'center' },
  { id: 'priority', label: 'Priority', minWidth: 100, align: 'center' },
  { id: 'assignee', label: 'Assignee', minWidth: 150 },
  { id: 'dueDate', label: 'Due Date', minWidth: 120, align: 'right' },
];

export default async function Tickets() {
  const tickets = await getTickets();

  return (
    <Box display="flex" gap={3}>
      <Box width="75%">
        <Table
          isRowClickable
          columns={columns}
          rows={Object.values(tickets)}
          title="Task List"
        />
      </Box>
      <TicketDescription />
    </Box>
  );
}
