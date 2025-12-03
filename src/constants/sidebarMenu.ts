import { IRole } from "@/features/user/user.interface";
import { SidebarMenuItem } from "@/types/sidebar";
import { LayoutDashboard } from "lucide-react";

export const ALL_MENU_ITEMS: Record<string, SidebarMenuItem> = {
  dashboard: {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
};

export const COMMON_ROUTES = [
  "/profile",
  "/settings",
  "/change-password",
  "/notifications",
];

export const ROLE_MENU_CONFIG: Record<IRole, string[]> = {
  [IRole.SUPER_ADMIN]: ["dashboard"],
};
