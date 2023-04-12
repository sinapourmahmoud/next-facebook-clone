import React from "react";
import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  let data = useSession();
  return (
    <div className="max-w-[600px] mt-3 xl:min-w-[250px] flex flex-col gap-2">
      <SidebarRow
        title={data?.data?.user?.name}
        src={data?.data?.user?.image}
      />
      <SidebarRow
        title={"Users"}
        icon={<UsersIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"Groupes"}
        icon={<UserGroupIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"Shopping"}
        icon={<ShoppingBagIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"Watch"}
        icon={<DesktopComputerIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"Events"}
        icon={<CalendarIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"Houres"}
        icon={<ClockIcon className="w-5 text-blue-500 lg:w-6" />}
      />
      <SidebarRow
        title={"More"}
        icon={<ChevronDownIcon className="w-5 text-blue-500 lg:w-6" />}
      />
    </div>
  );
};

export default Sidebar;
