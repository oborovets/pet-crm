import { TextField as MUITextField, TextFieldProps } from '@mui/material';

type Props = {} & TextFieldProps;

export default function TextField(props: Props) {
  return <MUITextField {...props} />;
}
