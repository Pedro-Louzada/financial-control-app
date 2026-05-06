import {
  BanknoteArrowUp,
  LayoutDashboard,
  PiggyBank,
  Power,
  Settings,
  WalletCards,
} from "lucide-react";

import { NavLink } from "./_components/NavLink";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-3xs h-screen flex flex-col border-r-[0.2px] border-r-[#99a1af]">
      <Link href={""}>
        <div className="flex gap-2.5 px-2.5 ml-3 py-5 items-center border-b-[0.2px] border-b-[#99a1af]">
          <PiggyBank className="text-green-300" width={25} height={25} />
          <h1 className="font-bold text-2xl font-family-nav-link text-gray-800">
            Finly
          </h1>
        </div>
      </Link>

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
