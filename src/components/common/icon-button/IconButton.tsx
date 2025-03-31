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

  onClick?: IconButtonProps['onClick'];
  icon: IconButtonProps['children'];
  children: IconButtonProps['children'];
  href?: string;
};

export default function IconButton({
  tooltipTitle,
  icon,
  onClick,
  href,
}: Props) {
  return (
    <Tooltip title={tooltipTitle}>
      <MUIIconButton onClick={onClick}>
        {href ? <Link href={href}>{icon}</Link> : icon}
      </MUIIconButton>
    </Tooltip>
  );
}
