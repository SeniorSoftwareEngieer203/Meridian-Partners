import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Admin Portal",
  path: "/portal/admin",
  noIndex: true,
});

const navItems = [
  { label: "Dashboard", href: "/portal/admin", icon: LayoutDashboard },
  { label: "Users & Roles", href: "/portal/admin/users", icon: Users },
  { label: "Hiring Requests", href: "/portal/admin/hiring", icon: Briefcase },
  { label: "Applications", href: "/portal/admin/applications", icon: FileText },
  { label: "Messages", href: "/portal/admin/messages", icon: MessageSquare },
  { label: "Analytics", href: "/portal/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/portal/admin/settings", icon: Settings },
];

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
      <aside className="hidden w-56 shrink-0 lg:block">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Admin Portal
        </h2>
        <nav className="space-y-1" aria-label="Admin navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
