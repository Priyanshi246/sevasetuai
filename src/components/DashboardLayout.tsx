import { ReactNode } from "react";
import { NavLink } from "@/components/NavLink";
import { LayoutDashboard, FileText, Users, ListChecks, BarChart3, Settings, Bell, Upload, UserPlus, Smartphone, LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const nav = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/reports", icon: FileText, label: "Reports" },
  { to: "/admin/upload", icon: Upload, label: "Upload Report" },
  { to: "/admin/volunteers", icon: Users, label: "Volunteers" },
  { to: "/admin/matching", icon: UserPlus, label: "Matching" },
  { to: "/admin/tasks", icon: ListChecks, label: "Tasks" },
  { to: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/volunteer-app", icon: Smartphone, label: "Volunteer App" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

export const DashboardLayout = ({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <aside className="hidden lg:flex w-64 flex-col border-r bg-card sticky top-0 h-screen">
        <div className="px-6 py-5 border-b">
          <Logo />
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              activeClassName="!bg-accent !text-accent-foreground"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t">
          <NavLink to="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary">
            <LogOut className="w-4 h-4" /> Sign out
          </NavLink>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-card/80 glass sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8">
          <div className="lg:hidden"><Logo /></div>
          <div className="hidden lg:block">
            <h1 className="font-heading text-xl font-bold">{title}</h1>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Avatar className="w-9 h-9 border-2 border-primary/20">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">AK</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8 animate-fade-in">
          <div className="lg:hidden mb-4">
            <h1 className="font-heading text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
