"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", "Hours Per Day": 6, Income: 120 },
  { name: "Tue", "Hours Per Day": 9, Income: 180 },
  { name: "Wed", "Hours Per Day": 12, Income: 240 },
  { name: "Thu", "Hours Per Day": 6, Income: 120 },
  { name: "Fri", "Hours Per Day": 2, Income: 40 },
  { name: "Sat", "Hours Per Day": 4, Income: 80 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ left: -35, top: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Hours Per Day"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Line type="monotone" dataKey="Income" stroke="green" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
