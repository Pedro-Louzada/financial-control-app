"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <div className="flex px-5 py-5 border-b-[0.2px] border-b-[#f6f6f6] items-center justify-end">
      <div className="flex gap-1.5">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-gray-800 font-medium text-end text-s">
            Pedro Louzada
          </h4>
          <span className="text-xs text-gray-400">
            pedro.louzada@digitalbot.com
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-gray-500">
                <BadgeCheckIcon className="text-[#DEDEDE]" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-500">
                <CreditCardIcon className="text-[#DEDEDE]" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-500">
                <BellIcon className="text-[#DEDEDE]" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-500">
              <LogOutIcon className="text-[#DEDEDE]" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
