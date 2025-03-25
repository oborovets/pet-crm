import { Typography as MUITypography, TypographyProps } from "@mui/material";

type Props = {
  variant: Extract<
    TypographyProps["variant"],
    "h6" | "h5" | "h3" | "subtitle1" | "body1" | "body2"
  >;
  children: React.ReactNode;
};

export default function Typography({ variant, children }: Props) {
  return <MUITypography variant={variant}>{children}</MUITypography>;
}
