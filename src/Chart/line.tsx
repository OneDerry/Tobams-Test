import {
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "12:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "13:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "14:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "15:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const LineC = () => {
  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineC;
