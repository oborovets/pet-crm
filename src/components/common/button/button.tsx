'use client';
import { ReactNode, useCallback, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button as MUIButton,
  IconButton,
  Tooltip,
  TooltipProps,
  SvgIconProps,
} from '@mui/material';

type BaseProps = {
  tooltipText?: string;
  children?: string | ReactNode;
  isTooltipVisible?: boolean;
  placement?: TooltipProps['placement'];
  icon?: React.ComponentType<SvgIconProps>;
  asIconButton?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

type ConditionalProps =
  | { asLink: true; href: string; onClick?: never; type?: 'button' }
  | {
      asLink?: false;
      href?: never;
      onClick?: () => void;
      type?: 'submit' | 'button';
    };

type Props = BaseProps & ConditionalProps;

export default function Button({
  href,
  tooltipText,
  children,
  isTooltipVisible = false,
  placement = 'right',
  icon: Icon,
  asLink = false,
  asIconButton = false,
  type = 'button',
  loading,
  disabled,
  onClick,
}: Props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const core = useCallback(
    () => (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Tooltip
          open={isTooltipOpen && isTooltipVisible}
          title={tooltipText}
          placement={placement}
          slotProps={{
            tooltip: {
              sx: {
                borderRadius: '5px',
                py: 0.7,
                bgcolor: 'primary.main',
              },
            },
          }}
        >
          {asIconButton ? (
            <IconButton onClick={onClick} color="primary" type={type}>
              {Icon && <Icon color="primary" fontSize="medium" />}
            </IconButton>
          ) : (
            <MUIButton
              color="primary"
              variant="outlined"
              disabled={disabled}
              loading={loading}
              sx={{ display: 'flex', justifyContent: 'flex-start', px: 2 }}
              size="medium"
              fullWidth
              onClick={onClick}
              startIcon={Icon && <Icon color="primary" />}
              type={type}
            >
              {children}
            </MUIButton>
          )}
        </Tooltip>
      </Box>
    ),
    [
      isTooltipOpen,
      isTooltipVisible,
      tooltipText,
      placement,
      onClick,
      Icon,
      asIconButton,
      children,
      type,
      disabled,
      loading,
    ]
  );

  return (
    <Box
      onMouseEnter={() => {
        if (isTooltipVisible) {
          setIsTooltipOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (isTooltipVisible) {
          setIsTooltipOpen(false);
        }
      }}
      sx={{
        // transition: 'background-color .3s ease',
        color: 'white',
        width: '100%',
        borderRadius: 1,
        pr: 1,
        '&:hover': {},
        '&:hover > *': {
          transition: 'color .4s ease',
        },
      }}
    >
      {asLink && href ? (
        <Link
          href={href}
          style={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          {core()}
        </Link>
      ) : (
        core()
      )}
    </Box>
  );
}
