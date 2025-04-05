'use client';

import {
  Card as MUICard,
  CardHeader,
  CardContent,
  IconButton,
  SvgIconProps,
  Badge,
} from '@mui/material';

import { Typography } from '../../common';
import Link from 'next/link';

type Props = {
  headerTitle: string;
  subHeader?: string;
  contentTitle: string;
  contentSubTitle?: string;
  icon?: React.ElementType<SvgIconProps>;
  route?: string;
};

export default function Card({
  headerTitle,
  contentTitle,
  subHeader,
  contentSubTitle,
  icon: Icon,
  route,
}: Props) {
  const badgeContent = 1;

  return (
    <MUICard
      sx={{
        borderRadius: '12px',
        padding: 1,
        width: 220,
      }}
    >
      <CardHeader
        title={<Typography variant="h6">{headerTitle}</Typography>}
        subheader={
          subHeader && <Typography variant="subtitle1">{'xxx'}</Typography>
        }
        action={
          Icon && (
            <IconButton>
              <Link href={route ?? ''} style={{ color: 'inherit' }}>
                <Badge badgeContent={badgeContent} color="primary">
                  <Icon fontSize="large" />
                </Badge>
              </Link>
            </IconButton>
          )
        }
      />
      <CardContent>
        <Typography variant="h3">{contentTitle}</Typography>
        <Typography variant="body1">{contentSubTitle}</Typography>
      </CardContent>
    </MUICard>
  );
}
