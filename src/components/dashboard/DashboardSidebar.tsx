import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, MessageSquare, BookOpen, TrendingUp, Settings, LogOut, BookMarked } from "lucide-react";
import { auth } from "../../../firebase.js";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { GlassButton } from "@/components/ui/glass-button";

const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Practice", url: "/dashboard/practice", icon: MessageSquare },
  { title: "Vocabulary", url: "/dashboard/vocabulary", icon: BookOpen },
  { title: "Improve Grammar", url: "/dashboard/grammar", icon: BookMarked },
  { title: "Progress", url: "/dashboard/progress", icon: TrendingUp },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const navigate = useNavigate();

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-muted text-foreground font-medium shadow-sm" 
      : "text-muted-foreground hover:text-foreground hover:bg-muted/50";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-card`}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">ET</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">English Tutor AI</h2>
                <p className="text-xs text-muted-foreground">Your AI Learning Companion</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/dashboard"}
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-border">
          <GlassButton
            variant="outline"
            size="sm"
            onClick={() => {
              auth.signOut();
              navigate("/");  
            }}
            className="w-full justify-start text-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </GlassButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}