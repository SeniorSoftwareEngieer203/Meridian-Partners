import Image from "next/image";
import {
  Code2, Flag, ArrowRight, MapPin, Clock, Check, X,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { careerRoles, careerPaths, softwareRoles } from "@/content/careers";
import { siteImages } from "@/content/images";
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

const careerPathImages = [siteImages.careersDevelopers, siteImages.careersFriendAmerican];
const careerPathIcons = [Code2, Flag];

export default function CareersPage() {
  const softwareJobs = careerRoles.filter((r) => r.category === "software");
  const successJobs = careerRoles.filter((r) => r.category === "developer-success");
  const { software, developerSuccess } = careerPaths;
  const paths = [software, developerSuccess];

  return (
    <>
      <PageHero
        title="Build Your Career"
        subtitle="Foreign developers build. Friend Americans support. Together we help American companies deliver outstanding software."
        image={siteImages.careersDevelopers}
        imageAlt="Foreign developers team at Meridian Partners"
      />

      <section className="section">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8">
            {paths.map((path, i) => {
              const Icon = careerPathIcons[i];
              return (
                <Surface key={path.title} hover={false} className="overflow-hidden p-0">
                  <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden sm:aspect-[2.4/1]">
                    <Image
                      src={careerPathImages[i]}
                      alt={path.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">{path.title}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border bg-card p-6 sm:p-8">
                    <p className="text-base font-medium text-foreground">{path.subtitle}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {path.description}
                    </p>
                    {"highlights" in path && path.highlights && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {path.highlights.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button
                      href={i === 0 ? "#software-professionals" : "#developer-success"}
                      variant="outline"
                      size="sm"
                      className="mt-6"
                    >
                      View Roles <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Surface>
              );
            })}
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
