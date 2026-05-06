import type { LucideIcon } from "lucide-react";

import Link from "next/link";

interface NavLinkProps {
  child: string;
  icon: LucideIcon;
  href: string;
}

export function NavLink({ child, href, icon: Icon }: NavLinkProps) {
  return (
    <div className="px-2.5 py-3.5 hover:bg-green-300 hover:rounded-xl group">
      <Link href={href} className="flex gap-2 items-center">
        <Icon
          className="text-[#99a1af] group-hover:text-white"
          width={20}
          height={20}
        />
        <p className="font-bold text-[0.875rem] text-gray-500 group-hover:text-white font-family-nav-link">
          {child}
        </p>
      </Link>
    </div>
  );
}
