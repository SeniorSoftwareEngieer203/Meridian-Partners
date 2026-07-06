import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, FileUp, Briefcase } from "lucide-react";

export default function CandidateDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Candidate Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Manage your profile, upload your resume, and track application status.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card hover>
          <User className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <h2 className="mt-4 font-semibold">Complete Your Profile</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add your skills, experience, and portfolio links to get matched with
            the right opportunities.
          </p>
          <Button href="/portal/candidate/profile" variant="outline" size="sm" className="mt-4">
            Edit Profile
          </Button>
        </Card>

        <Card hover>
          <FileUp className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <h2 className="mt-4 font-semibold">Upload Resume</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload your latest resume so our team can match you with client
            opportunities faster.
          </p>
          <Button href="/portal/candidate/resume" variant="outline" size="sm" className="mt-4">
            Upload Resume
          </Button>
        </Card>
      </div>

      <Card className="mt-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <h2 className="font-semibold">Application Tracking</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          No applications yet. Once you apply or are matched with a client
          opportunity, your application status will appear here.
        </p>
      </Card>
    </div>
  );
}
