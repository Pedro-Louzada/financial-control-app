"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import { DashboardCard } from "@/components/DashboardCard";
import { Flame, HandHeart, ShieldPlus, WalletCards } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const data = [
  {
    name: "Sun",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Wed",
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: "Thu",
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: "Fri",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
  {
    name: "Sat",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

export default function Dashboard() {
  return (
    <div className="flex p-4 flex-col flex-1 gap-5">
      <div className="flex gap-3">
        <DashboardCard
          title="Montly Revenue"
          amount="12.000"
          percentual={2.5}
          description="comparated to last month"
          iconDetails={{
            icon: HandHeart,
            color: "blue",
            width: 25,
            height: 25,
          }}
        />
        <DashboardCard
          title="Not burn rate"
          amount="2.000"
          percentual={-0.8}
          description="comparated to last month"
          iconDetails={{
            icon: Flame,
            color: "red",
            width: 25,
            height: 25,
          }}
        />
        <DashboardCard
          title="Payroll processed"
          amount="1.000"
          percentual={0}
          description="comparated to last month"
          iconDetails={{
            icon: WalletCards,
            color: "yellow",
            width: 25,
            height: 25,
          }}
        />
        <DashboardCard
          title="Compliance score"
          amount="500"
          percentual={10}
          description="comparated to last month"
          iconDetails={{
            icon: ShieldPlus,
            color: "green",
            width: 25,
            height: 25,
          }}
        />
      </div>
      <div className="flex flex-col bg-gray-50 border rounded-xl p-6 gap-6">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-2xl font-family-nav-link text-gray-800">
            Sales Earnings Timeline
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={""}>
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <LineChart
          style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
          responsive
          data={data}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" stroke="blue" />
          <Legend />
          <RechartsDevtools />
        </LineChart>
      </div>
    </div>
  );
}
