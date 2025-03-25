"use client";

import {
  Card as MUICard,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
  SvgIconProps,
  Badge,
} from "@mui/material";

import Link from "next/link";

type Props = {
  headerTitle: string;
  heaaderSubTitle: string;
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
    <Box sx={{ padding: "10px" }}>
      <Link href="">
        <IconButton>
          {Icon && (
            <Badge badgeContent={1} color="primary" >
              <Icon />
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
        minWidth: "300px",
        width: "370px",
        maxWidth: "450px",
        borderRadius: "10px",
        padding: "12px",
      }}
    >
      {/* FIXME: FIX THIS Pixels in action prop */}
      <CardHeader
        title={<Typography variant="h6">{headerTitle}</Typography>}
        subheader={
          <Typography variant="subtitle2">{heaaderSubTitle}</Typography>
        }
        action={renderButtons()}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "end",
          gap: 2,
        }}
      >
        <Typography variant="h3">{contentTitle}</Typography>
        <Typography pb={1} variant="body1">
          {contentSubTitle}
        </Typography>
      </CardContent>
    </MUICard>
  );
}
