import { Button as MUIButton, ButtonProps } from "@mui/material";

export default function Button({
  variant,
  onClick,
  loading,
  disabled,
  children,
}: ButtonProps) {
  return (
    <MUIButton
      variant={variant}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </MUIButton>
  );
}
