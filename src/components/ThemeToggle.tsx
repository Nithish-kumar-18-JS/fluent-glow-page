import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GlassButton } from "@/components/ui/glass-button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <GlassButton variant="ghost" size="icon">
        <Sun className="h-5 w-5" />
      </GlassButton>
    );
  }

  return (
    <GlassButton
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-transform hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform rotate-0" />
      ) : (
        <Moon className="h-5 w-5 transition-transform rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </GlassButton>
  );
}
