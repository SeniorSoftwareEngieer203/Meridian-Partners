import { Card } from "@/components/ui/Card";
import { Users, Briefcase, FileText, TrendingUp } from "lucide-react";

const stats = [
  { label: "Active Candidates", value: "-", icon: Users },
  { label: "Open Requests", value: "-", icon: Briefcase },
  { label: "Applications", value: "-", icon: FileText },
  { label: "Placements (MTD)", value: "-", icon: TrendingUp },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Manage users, hiring requests, applications, and platform analytics.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="font-semibold">Getting Started</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This admin portal is scaffolded and ready for authentication integration.
          Connect NextAuth or Clerk, then wire up Prisma models for full functionality.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• User & role management</li>
          <li>• Hiring request oversight</li>
          <li>• Application tracking pipeline</li>
          <li>• Platform analytics & reporting</li>
        </ul>
      </Card>
    </div>
  );
}
