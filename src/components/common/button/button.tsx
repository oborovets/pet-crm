'use client';

import { Button as MUIButton, SvgIconProps } from '@mui/material';

type Props = {
  children: string;
  icon?: React.ComponentType<SvgIconProps>;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  icon: Icon,
  loading,
  disabled,
  onClick,
  ...rest
}: Props) {
  return (
    <MUIButton
      color="primary"
      variant="contained"
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      startIcon={Icon && <Icon color="primary" />}
      {...rest}
    >
      {children}
    </MUIButton>
  );
}
