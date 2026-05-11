import { DashboardCard } from "@/components/DashboardCard";
import { Flame, HandHeart, ShieldPlus, WalletCards } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex p-4 flex-col flex-1">
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
    </div>
  );
}
