"use client";

import { RechartsDevtools } from "@recharts/devtools";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    uv: 400,
  },
  {
    name: "Mon",
    uv: 300,
  },
  {
    name: "Tue",
    uv: 320,
  },
  {
    name: "Wed",
    uv: 200,
  },
  {
    name: "Thu",
    uv: 278,
  },
  {
    name: "Fri",
    uv: 189,
  },
  {
    name: "Sat",
    uv: 189,
  },
];

export function DashboardChart() {
  return (
    <div className="w-full h-75">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            fillOpacity={0.3}
            verticalCoordinatesGenerator={(props) => {
              const verticalLinePositions = data.map((item, index, array) => {
                if (!index)
                  return (
                    props.offset.left +
                    (props.width - props.offset.left) / data.length
                  );

                if (index === array.length - 1) return props.width;

                return (
                  props.width -
                  ((props.width - props.offset.right) / data.length) * index
                );
              });

              return verticalLinePositions.slice(1, -1);
            }}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickMargin={12}
            tickLine={false}
          />
          <YAxis axisLine={false} tickMargin={24} tickLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <RechartsDevtools />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
