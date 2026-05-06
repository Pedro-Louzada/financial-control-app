"use client";

import {
  BanknoteArrowUp,
  CirclePoundSterling,
  LayoutDashboard,
  Power,
  Settings,
  WalletCards,
} from "lucide-react";

import { NavLink } from "./_components/NavLink";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-3xs h-screen flex flex-col border-r-[0.2px] border-r-[#f6f6f6]">
      <div className="px-2.5 ml-3 mr-3 py-5 border-b-[0.2px] border-b-[#f6f6f6]">
        <Link className="flex gap-2.5 items-center" href={""}>
          <div className="border rounded-full p-1 border-gray-100 shadow-md">
            <CirclePoundSterling
              className="text-green-300"
              width={25}
              height={25}
            />
          </div>
          <h1 className="font-bold text-2xl font-family-nav-link text-gray-800">
            Finly
          </h1>
        </Link>
      </div>

      <div className="flex flex-col p-3 flex-1">
        <div className="flex-1">
          <NavLink child="Dashboard" href="" icon={LayoutDashboard} />

          <NavLink child="Transactions" href="" icon={BanknoteArrowUp} />

          <NavLink child="Payroll" href="" icon={WalletCards} />
        </div>
        <div className="flex flex-col">
          <NavLink child="Settings" href="" icon={Settings} />

          <NavLink child="Logout" href="" icon={Power} />
        </div>
      </div>
    </div>
  );
}
