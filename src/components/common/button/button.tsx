'use client';

import { Button as MUIButton, ButtonProps } from '@mui/material';

type Props = {
  children: ButtonProps['children'];
  icon?: ButtonProps['endIcon'];
  loading?: boolean;
  disabled?: boolean;
  onClick?: ButtonProps['onClick'];
  variant?: ButtonProps['variant'];
  sx?: ButtonProps['sx'];
  iconPlacement?: 'start' | 'end';
  disableRipple?: true | false;
  size?: ButtonProps['size'];
};

export default function Button({
  children,
  icon: svgIcon = null,
  loading,
  disabled,
  onClick,
  variant = 'contained',
  iconPlacement = 'start',
  size,
  ...rest
}: Props) {
  const icon =
    iconPlacement === 'start' ? { startIcon: svgIcon } : { endIcon: svgIcon };

  return (
    <MUIButton
      size={size}
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
