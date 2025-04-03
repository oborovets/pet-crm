import { SvgIcon as MUISvgIcon, SvgIconProps } from '@mui/material';

type Props = {} & SvgIconProps;

export default function SvgIcon({ children, ...rest }: Props) {
  return <MUISvgIcon {...rest}>{children}</MUISvgIcon>;
}
