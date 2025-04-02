import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '../common';

export default function Chart() {
  return (
    <Box bgcolor="white" borderRadius={3}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={456}
        height={211}
      />
    </Box>
  );
}
