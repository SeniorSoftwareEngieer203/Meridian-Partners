import {
  Code2, Flag, ArrowRight, MapPin, Clock, Check, X,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { careerRoles, careerPaths, softwareRoles } from "@/content/careers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FriendAmericansStories } from "@/components/sections/FriendAmericansStories";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join Meridian Partners as a foreign developer or as a Friend American on our Developer Success Team.",
  path: "/careers",
});

export default function CareersPage() {
  const softwareJobs = careerRoles.filter((r) => r.category === "software");
  const successJobs = careerRoles.filter((r) => r.category === "developer-success");
  const { software, developerSuccess } = careerPaths;

  return (
    <>
      <PageHero
        title="Build Your Career"
        subtitle="Foreign developers build. Friend Americans support. Together we help American companies deliver outstanding software."
      />

      <section className="section">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {[software, developerSuccess].map((path, i) => (
              <Surface key={path.title} padding>
                {i === 0 ? <Code2 className="h-8 w-8 text-brand-600" /> : <Flag className="h-8 w-8 text-brand-600" />}
                <h2 className="mt-4 text-xl font-bold">{path.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{path.description}</p>
                <Button href={i === 0 ? "#software-professionals" : "#developer-success"} variant="outline" size="sm" className="mt-6">
                  View Roles <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section id="software-professionals" className="section scroll-mt-20 border-t border-border bg-muted/40">
        <Container>
          <SectionHeader eyebrow="Engineering" title="Foreign Developers" align="left" />
          <div className="mb-8 flex flex-wrap gap-2">
            {softwareRoles.map((role) => <Badge key={role} variant="brand">{role}</Badge>)}
          </div>
          <div className="space-y-3">
            {softwareJobs.map((job) => (
              <Surface key={job.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                  <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="sm">Apply</Button>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section id="developer-success" className="section scroll-mt-20 border-t border-border">
        <Container>
          <SectionHeader
            eyebrow="Friend Americans"
            title="Developer Success Team"
            subtitle="Any U.S. citizen can join. Commitment, patience, and work ethic required. No technical background needed."
            align="left"
          />

          <div className="mb-8">
            <Surface padding>
              <h3 className="text-sm font-semibold text-brand-600">What you&apos;ll support</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {developerSuccess.supportAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-600" />{area}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            <Surface padding>
              <h3 className="text-sm font-semibold text-red-500">Not required</h3>
              <ul className="mt-3 space-y-2">
                {developerSuccess.notRequired.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-400" />{item}
                  </li>
                ))}
              </ul>
            </Surface>
            <Surface padding>
              <h3 className="text-sm font-semibold text-brand-600">We value</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {developerSuccess.qualities.map((q) => (
                  <li key={q} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-600" />{q}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
          <div className="space-y-3">
            {successJobs.map((job) => (
              <Surface key={job.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge className="mb-2">Any U.S. citizen · No experience required</Badge>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                </div>
                <Button href="/contact" size="sm">Apply Now</Button>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <FriendAmericansStories />
      <ContactCTA />
    </>
  );
}
