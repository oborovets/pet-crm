'use client';

import { Button as MUIButton, ButtonProps } from '@mui/material';

type Props = {
  children: string;
  icon?: ButtonProps['endIcon'];
  loading?: boolean;
  disabled?: boolean;
  onClick: ButtonProps['onClick'];
  variant?: ButtonProps['variant'];
  sx?: ButtonProps['sx'];
  iconPlacement?: 'start' | 'end';
  disableRipple?: true | false;
};

export default function Button({
  children,
  icon: svgIcon = null,
  loading,
  disabled,
  onClick,
  variant = 'contained',
  iconPlacement = 'start',
  ...rest
}: Props) {
  const icon =
    iconPlacement === 'start' ? { startIcon: svgIcon } : { endIcon: svgIcon };

  return (
    <MUIButton
      color="primary"
      variant={variant}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      {...icon}
      {...rest}
    >
      {children}
    </MUIButton>
  );
}
