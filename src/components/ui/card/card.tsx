"use client";

import {
  Card as MUICard,
  CardHeader,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

import Button from "../Button";
import Avatar from "../avatar";

export default function Card() {
  const renderButtons = () => (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 1 }}
    >
      <Button variant="contained">Hello</Button>
      <Button variant="outlined">World</Button>
    </Box>
  );

  return (
    <MUICard sx={{ width: "25%", borderRadius: "15px" }}>
      <CardHeader
        title={<Typography>Profile</Typography>}
        subheader={<Typography>Your stats</Typography>}
        avatar={<Avatar />}
        action={renderButtons()}
      />
      <CardContent>
        <Typography>Tracked Hours: 12</Typography>
        <Typography>Active Projects: 3</Typography>
        <Typography>Finished Projects: 10</Typography>
      </CardContent>
    </MUICard>
  );
}
