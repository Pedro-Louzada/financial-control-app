import { ArrowUp, HandHeart } from "lucide-react";

interface CardProps {
  title: string;
  amount: string;
  percent: string;
}

export function DashboardCard({ title, amount, percent }: CardProps) {
  return (
    <button className="flex flex-1 flex-col gap-5 border-[0.2px] border-gray-200 p-3 rounded-xl cursor-pointer">
      <div className="flex gap-5 justify-between items-start">
        <div className="flex flex-col gap-2.5 items-start">
          <p className="text-gray-400 font-family-nav-link">{title}</p>
          <h3 className="text-gray-800 font-family-nav-link font-medium text-4xl">
            R$ {amount}
          </h3>
        </div>
        <div className=" bg-blue-100 p-2 rounded-xl flex">
          <HandHeart className="text-blue-300" width={25} height={25} />
        </div>
      </div>

      <div className="flex gap-2 items-baseline">
        <div className="bg-green-100 p-2 rounded-xl flex justify-center items-center">
          <ArrowUp className="text-green-400" width={15} height={10} />
          <span className="text-green-400 font-family-nav-link text-s font-medium">
            +{percent}%
          </span>
        </div>
        <span className="text-gray-400 font-family-nav-link text-s">
          comparated to last month
        </span>
      </div>
    </button>
  );
}
