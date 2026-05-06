"use client";

import { usePathname } from "next/navigation";

import type { LucideIcon } from "lucide-react";

import Link from "next/link";

interface NavLinkProps {
  child: string;
  icon: LucideIcon;
  href: string;
}

export function NavLink({ child, href, icon: Icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`px-2.5 py-3.5 rounded-xl ${
        isActive ? "bg-green-300" : "hover:bg-green-300"
      } group`}
    >
      <Link href={href} className="flex gap-2 items-center">
        <Icon
          className={`${
            isActive ? "text-white" : "text-[#DEDEDE] group-hover:text-white"
          }`}
          width={20}
          height={20}
        />
        <p
          className={`font-medium text-s
          font-family-nav-link ${
            isActive ? "text-white" : "text-gray-500 group-hover:text-white"
          }`}
        >
          {child}
        </p>
      </Link>
    </div>
  );
}
