import { Card } from "@/components/Card";
import { ArrowUp, HandHeart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex p-4 flex-col flex-1">
      <div className="flex gap-3">
        <Card title="Montly Revenue" amount="12.000" percent="2.5" />
        <Card title="Not burn rate" amount="2.000" percent="0" />
        <Card title="Payroll processed" amount="1.000" percent="5" />
        <Card title="Compliance score" amount="500" percent="10" />
      </div>
    </div>
  );
}
