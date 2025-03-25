"use client";
import { Button as MUIButton, ButtonProps } from "@mui/material";

export default function Button({
  variant,
  onClick,
  loading,
  disabled,
  children,
  size = "small",
}: ButtonProps) {
  return (
    <MUIButton
      size={size}
      variant={variant}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </MUIButton>
  );
}
