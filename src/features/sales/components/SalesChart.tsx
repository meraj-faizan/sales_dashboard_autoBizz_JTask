import { ITotalSale } from "../sales.interface";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  data: ITotalSale[];
}

export const SalesChart = ({ data }: SalesChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="totalSale" 
          stroke="#8884d8" 
          activeDot={{ r: 8 }} 
          name="Total Sale"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};