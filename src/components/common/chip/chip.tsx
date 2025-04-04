import { Chip as MUIChip, ChipProps } from '@mui/material';

type Props = {} & ChipProps;

export default function Chip({ sx, ...rest }: Props) {
  return <MUIChip {...rest} sx={{ ...sx }} />;
}
