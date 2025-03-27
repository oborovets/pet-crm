import { Box as MUIBox, BoxProps } from "@mui/material";

type Props = BoxProps;

export default function Box({ children, sx, ...rest }: Props) {
  return (
    <MUIBox sx={{ ...sx }} {...rest}>
      {children}
    </MUIBox>
  );
}
