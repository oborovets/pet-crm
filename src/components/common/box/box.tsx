import { Box as MUIBox, BoxProps } from '@mui/material';

type Props = {} & BoxProps;

const Box = ({ children, ...rest }: Props) => {
  return (
    <MUIBox {...rest} sx={{ ...rest.sx }}>
      {children}
    </MUIBox>
  );
};

export default Box;
