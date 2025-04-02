import {
  TableContainer,
  Table as MUITable,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from '@mui/material';
import TableRow from './table-row';
import { Typography } from '../';

import type { TableColumn } from '../../../types/table';

type TableProps = {
  isRowClickable?: boolean;
  columns: TableColumn[];
  rows: TableData[];
  title?: string;
};

export type TableData = {
  [key: string]: string;
};

const Table = ({ columns, rows, title, isRowClickable }: TableProps) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      {title && (
        <Typography variant="h5" sx={{ padding: 2 }}>
          {title}
        </Typography>
      )}
      <MUITable stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell
                key={column?.id ?? idx}
                align={column?.align ?? 'left'}
                style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              sx={{ ':hover': { cursor: 'pointer' } }}
              key={rowIndex}
              isRowClickable={isRowClickable}
              urlParams={{ ticketId: row.id }}
            >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
export default Table;
