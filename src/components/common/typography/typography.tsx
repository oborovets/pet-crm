import { Typography as MUITypography, TypographyProps } from '@mui/material';

type Props = {
  variant: Extract<
    TypographyProps['variant'],
    'h6' | 'h5' | 'h3' | 'subtitle1' | 'body1' | 'body2'
  >;
  children: React.ReactNode;
  visibility?: TypographyProps['visibility'];
  sx?: TypographyProps['sx'];
  color?: TypographyProps['color'];
};

export default function Typography({
  variant,
  children,
  visibility = 'visible',
  sx,
  color = 'inherit',
}: Props) {
  return (
    <MUITypography
      visibility={visibility}
      color={color}
      variant={variant}
      sx={sx}
    >
      {children}
    </MUITypography>
  );
}
