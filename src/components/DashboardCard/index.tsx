import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";

type CardIconColor = "blue" | "red" | "yellow" | "green";

interface CardProps {
  title: string;
  description: string;
  amount: string;
  percentual: number;
  iconDetails: {
    icon: LucideIcon;
    color: CardIconColor;
    width: number;
    height: number;
  }; // React Component
}

export function DashboardCard({
  title,
  description,
  amount,
  percentual,
  iconDetails,
}: CardProps) {
  const { icon: CardIcon, color, ...rest } = iconDetails;

  const cardIconColorsVariant = {
    blue: {
      text: "text-blue-300",
      bg: "bg-blue-100",
    },
    red: {
      text: "text-red-300",
      bg: "bg-red-100",
    },
    yellow: {
      text: "text-yellow-300",
      bg: "bg-yellow-100",
    },
    green: {
      text: "text-green-300",
      bg: "bg-green-100",
    },
  };

  const isNegativePerecentual = percentual < 0;

  const PercentualIcon = isNegativePerecentual ? ArrowDown : ArrowUp;

  const normalizedPercentual = `${!isNegativePerecentual ? "+" : ""}${String(percentual).replace(".", ",").concat("%")}`;

  const percentualColorsVariant = {
    green: {
      text: "text-green-400",
      bg: "bg-green-100",
    },
    yellow: {
      text: "text-yellow-400",
      bg: "bg-yellow-100",
    },
    red: {
      text: "text-red-400",
      bg: "bg-red-100",
    },
  };

  const appropriateVariant = isNegativePerecentual
    ? percentualColorsVariant["red"]
    : percentual > 0
      ? percentualColorsVariant["green"]
      : percentualColorsVariant["yellow"];

  return (
    <button className="flex flex-1 flex-col gap-5 border-[0.2px] border-gray-200 p-3 rounded-xl cursor-pointer hover:bg-white hover:shadow-md transition duration-300 ease-in-out">
      <div className="flex gap-5 justify-between items-start">
        <div className="flex flex-col gap-2.5 items-start">
          <p className="text-gray-400 font-family-nav-link">{title}</p>
          <h3 className="text-gray-800 font-family-nav-link font-medium text-4xl">
            R$ {amount}
          </h3>
        </div>
        <div
          className={`${cardIconColorsVariant[color].bg} p-2 rounded-xl flex`}
        >
          <CardIcon
            className={`${cardIconColorsVariant[color].text}`}
            {...rest}
          />
        </div>
      </div>

      <div className="flex gap-2 items-baseline">
        <div
          className={`${appropriateVariant.bg} p-2 rounded-xl flex justify-center items-center`}
        >
          <PercentualIcon
            className={`${appropriateVariant.text}`}
            width={15}
            height={10}
          />
          <span
            className={`${appropriateVariant.text} font-family-nav-link text-s font-medium`}
          >
            {normalizedPercentual}
          </span>
        </div>
        <span className="text-gray-400 font-family-nav-link text-s">
          {description}
        </span>
      </div>
    </button>
  );
}
