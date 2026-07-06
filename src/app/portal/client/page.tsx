import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Briefcase, Users, Clock } from "lucide-react";

export default function ClientDashboardPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Client Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Submit hiring requests, review candidates, and manage your engagements.
          </p>
        </div>
        <Button href="/portal/client/requests/new" size="sm">
          New Hiring Request
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <Briefcase className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <div className="mt-3 text-2xl font-bold">-</div>
          <div className="text-xs text-muted-foreground">Active Requests</div>
        </Card>
        <Card>
          <Users className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <div className="mt-3 text-2xl font-bold">-</div>
          <div className="text-xs text-muted-foreground">Matched Candidates</div>
        </Card>
        <Card>
          <Clock className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <div className="mt-3 text-2xl font-bold">-</div>
          <div className="text-xs text-muted-foreground">Active Engagements</div>
        </Card>
      </div>

      <Card className="mt-8">
        <h2 className="font-semibold">Client Portal Features</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Submit and track hiring requests</li>
          <li>• Review matched candidate profiles</li>
          <li>• Direct messaging with your account team</li>
          <li>• Engagement status and reporting</li>
        </ul>
      </Card>
    </div>
  );
}
