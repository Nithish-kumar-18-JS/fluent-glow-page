import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GlassButton } from "@/components/ui/glass-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import useUserStore from "@/store/user";

export function DashboardHeader() {
  const user = useUserStore().getUser()
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-muted/50" />
        <div>
          <h1 className="text-lg font-semibold text-foreground">Hello, {user?.name} 👋</h1>
          <p className="text-sm text-muted-foreground">Ready for today's English practice?</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <div className="relative">
          <GlassButton variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </GlassButton>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full shadow-md animate-pulse" />
        </div>

        <Avatar className="h-9 w-9 ring-2 ring-border">
        <AvatarImage src={user?.picture ?? ""} alt={user?.name || "User"} />
          <AvatarFallback className="bg-muted">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}