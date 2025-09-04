import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GlassButton } from "@/components/ui/glass-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="h-16 glass-panel border-b border-glass-border/50 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="glass-panel hover:shadow-glow" />
        <div>
          <h1 className="text-lg font-semibold text-foreground">Hello, Sarah 👋</h1>
          <p className="text-sm text-muted-foreground">Ready for today's English practice?</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <GlassButton variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </GlassButton>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-glow animate-pulse" />
        </div>

        <Avatar className="h-9 w-9 ring-2 ring-glass-border">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
          <AvatarFallback className="glass-panel">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}