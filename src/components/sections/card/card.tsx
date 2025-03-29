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

type Props = {
  headerTitle: string;
  subHeader?: string;
  contentTitle: string;
  contentSubTitle?: string;
  icon?: React.ElementType<SvgIconProps>;
};

export default function Card({
  headerTitle,
  contentTitle,
  subHeader,
  contentSubTitle,
  icon: Icon,
}: Props) {
  const badgeContent = Math.ceil(Math.random() * 10);

  return (
    <MUICard
      sx={{
        borderRadius: '12px',
        padding: 1,
        minWidth: '180px',
        maxWidth: '220px',
      }}
    >
      <CardHeader
        title={<Typography variant="h6">{headerTitle}</Typography>}
        subheader={
          subHeader && <Typography variant="subtitle1">{subHeader}</Typography>
        }
        action={
          Icon && (
            <IconButton>
              <Badge badgeContent={badgeContent} color="primary">
                <Icon fontSize="large" />
              </Badge>
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
