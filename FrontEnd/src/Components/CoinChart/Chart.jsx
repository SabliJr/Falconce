import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parse, parseISO, subDays } from "date-fns";

const ChartHome = ({ chartData }) => {
  //   console.log(chartData.prices);
  return (
    <ResponsiveContainer width='100%' height='500'>
      <AreaChart data={chartData}>
        <Area keyValue={chartData.prices} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartHome;
