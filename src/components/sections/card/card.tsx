'use client';

import {
  Card as MUICard,
  CardHeader,
  CardContent,
  Box,
  IconButton,
  SvgIconProps,
  Badge,
} from '@mui/material';

import { Typography } from '../../common';

import Link from 'next/link';

type Props = {
  headerTitle: string;
  heaaderSubTitle?: string;
  contentTitle: string;
  contentSubTitle?: string;
  icon?: React.ElementType<SvgIconProps>;
};

export default function Card({
  headerTitle,
  contentTitle,
  heaaderSubTitle,
  contentSubTitle,
  icon: Icon,
}: Props) {
  const renderButtons = () => (
    <Box
      sx={{
        padding: 1,
      }}
    >
      <Link href="">
        <IconButton>
          {Icon && (
            <Badge
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.7rem',
                  height: '18px',
                  minWidth: '18px',
                  padding: '0 6px',
                },
              }}
              badgeContent={1}
              color="primary"
            >
              <Icon fontSize="large" />
            </Badge>
          )}
        </IconButton>
      </Link>
    </Box>
  );

  return (
    <MUICard
      elevation={8}
      sx={{
        minWidth: '250px',
        maxWidth: '350px',
        borderRadius: '10px',
        padding: 1.5,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardHeader
        title={<Typography variant="h6">{headerTitle}</Typography>}
        subheader={
          <Typography variant="subtitle1">{heaaderSubTitle}</Typography>
        }
        action={renderButtons()}
      />
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'end',
          gap: 2,
        }}
      >
        <Typography variant="h3">{contentTitle}</Typography>
        <Typography variant="body1">{contentSubTitle}</Typography>
      </CardContent>
    </MUICard>
  );
}
