'use client';
import Link from 'next/link';
import {
  IconButton as MUIIconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from '@mui/material';

type Props = {
  tooltipTitle?: TooltipProps['title'];
  placement?: TooltipProps['placement'];

  onClick?: IconButtonProps['onClick'];
  children: IconButtonProps['children'];
  href?: string;
};

export default function IconButton({
  tooltipTitle,
  children,
  onClick,
  href,
}: Props) {
  return (
    <Tooltip title={tooltipTitle} placement="right">
      <MUIIconButton onClick={onClick}>
        {href ? <Link href={href}>{children}</Link> : children}
      </MUIIconButton>
    </Tooltip>
  );
}
