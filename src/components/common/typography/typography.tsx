import { Typography as MUITypography, TypographyProps } from '@mui/material';

type Props = {
  variant: Extract<
    TypographyProps['variant'],
    'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'subtitle1' | 'body1' | 'body2'
  >;
  children: React.ReactNode;
  visibility?: TypographyProps['visibility'];
  sx?: TypographyProps['sx'];
  color?: TypographyProps['color'];
  fontWeight?: TypographyProps['fontWeight'];
  display?: TypographyProps['display'];
};

export default function Typography({
  variant,
  children,
  visibility = 'visible',
  sx,
  color = 'inherit',
  fontWeight = 'normal',
  display = '',
}: Props) {
  return (
    <MUITypography
      display={display}
      fontWeight={fontWeight}
      visibility={visibility}
      color={color}
      variant={variant}
      sx={sx}
    >
      {children}
    </MUITypography>
  );
}
