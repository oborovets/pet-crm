import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '../common';

const data = [
  { id: 1, color: 'red', label: 'Group A', value: 400 },
  { id: 2, color: 'blue', label: 'Group B', value: 300 },
  { id: 3, color: 'green', label: 'Group C', value: 300 },
];

export default function Chart() {
  return (
    <Box bgcolor="white" borderRadius={3}>
      <PieChart
        width={220}
        height={211}
        slotProps={{
          legend: { hidden: true },
        }}
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 90,
            paddingAngle: 5,
            cornerRadius: 15,
            startAngle: 0,
            endAngle: 300,
            cx: 100,
          },
        ]}
      />
    </Box>
  );
}
