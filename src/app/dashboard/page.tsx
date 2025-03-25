import Card from "@/components/ui/card";
import { Typography, Box } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Chart from "@/components/ui/chart/chart";
import Divider from "@mui/material/Divider";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h3">
            Monitor health of {"\n"} your business
          </Typography>

          <Typography variant="body1">
            Control and analyze your data in the easiest way
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 10,
            marginBottom: "20px",
            width: "75%",
          }}
        >
          <Card
            headerTitle="Tracked Hours"
            contentTitle="24"
            contentSubTitle="+3 last day"
            icon={AccessTimeIcon}
          />
          <Card
            headerTitle="Active Projects"
            contentTitle="3"
            contentSubTitle="One has pending status"
            icon={WorkOutlineIcon}
          />
          <Card
            headerTitle="Completed"
            contentTitle="7"
            contentSubTitle="+1 since last week"
            icon={CheckIcon}
          />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Chart />
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          width: "100%",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography variant="h5">Recent Acivities</Typography>
          <NotificationsActiveOutlinedIcon />
        </Box>
        <Divider />
      </Box>
    </Box>
  );
}
