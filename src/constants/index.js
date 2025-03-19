import { FileIcon, House, PlusIcon, Settings, User } from "lucide-react";

export default {
  NAVLINKS: [
    {
      name: "Overview",
      path: "/dashboard",
      icon: House,
    },
    {
      name: "Create Ad",
      path: "/dashboard/create-ad",
      icon: PlusIcon,
    },
    {
      name: "Vendor Ads",
      path: "/dashboard/ads",
      icon: FileIcon,
    },
    {
      name: "Profile",
      path: "/dashboard",
      icon: User,
    },
    {
      name: "Settings",
      path: "/dashboard",
      icon: Settings,
    },
  ],
};
