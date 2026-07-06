import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FileText,
  Settings,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Client Portal",
  path: "/portal/client",
  noIndex: true,
});

const navItems = [
  { label: "Dashboard", href: "/portal/client", icon: LayoutDashboard },
  { label: "Hiring Requests", href: "/portal/client/requests", icon: Briefcase },
  { label: "Candidates", href: "/portal/client/candidates", icon: FileText },
  { label: "Messages", href: "/portal/client/messages", icon: MessageSquare },
  { label: "Settings", href: "/portal/client/settings", icon: Settings },
];

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
      <aside className="hidden w-56 shrink-0 lg:block">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Client Portal
        </h2>
        <nav className="space-y-1" aria-label="Client navigation">
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
