import { Divider, Avatar } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Box, Typography } from "../common";

const data = [
  {
    sender: "Alice Johnson",
    message: "Meeting moved to next week ",
    time: "9:45 AM",
    date: "Monday",
  },
  {
    sender: "Brian Lee",
    message: "Can we review this today?",
    time: "2:10 PM",
    date: "Tuesday",
  },
  {
    sender: "Chloe Kim",
    message: "Report ready for submission",
    time: "11:30 AM",
    date: "Wednesday",
  },
  {
    sender: "Daniel Smith",
    message: "Let's catch up tomorrow morning",
    time: "4:00 PM",
    date: "Thursday",
  },
  {
    sender: "Emma Davis",
    message: "Client approved new proposal",
    time: "10:15 AM",
    date: "Friday",
  },
  {
    sender: "Frank Turner",
    message: "Please update the timeline chart",
    time: "1:25 PM",
    date: "Saturday",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActivitiesMessage = ({ sender, message, time, date, isLast }: any) => (
  <Box
    sx={{
      display: "flex",
      backdropFilter: "blur(0px)",
      justifyContent: "space-between",
      py: 2,
      px: 1,
      borderBottom: !isLast ? "1px solid black" : "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        backdropFilter: "blur(4px)",
        transform: "translateY(-4px)",
        boxShadow: 6,
      },
    }}
  >
    <Box sx={{ display: "flex", gap: 3 }}>
      <Avatar>{sender.slice(0, 2)}</Avatar>
      <Box>
        <Typography variant="body1">{sender}</Typography>
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
    <Box>
      <Typography variant="body1">{time}</Typography>
      <Typography variant="body2">{date}</Typography>
    </Box>
  </Box>
);

export function RecentActivities() {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "black",
        minWidth: "370px",
        borderRadius: "10px",
        padding: 1.5,
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
      {data.map((item, idx, arr) => (
        <ActivitiesMessage
          key={`${item.sender}_${item.message}`}
          {...item}
          isLast={idx === arr.length - 1}
        />
      ))}
    </Box>
  );
}
