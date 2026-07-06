import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { FriendAmericanSupportSection } from "@/components/sections/FriendAmericanSupportSection";
import { FriendAmericansStories } from "@/components/sections/FriendAmericansStories";
import { HowWeWorkFlow } from "@/components/sections/HowWeWorkFlow";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { DeveloperSuccessSection } from "@/components/sections/DeveloperSuccessSection";
import { WhyMeridian } from "@/components/sections/WhyMeridian";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { HiringProcessTimeline } from "@/components/sections/HiringProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <WhoWeAre />
      <FriendAmericanSupportSection />
      <FriendAmericansStories />
      <HowWeWorkFlow />
      <ServicesPreview />
      <DeveloperSuccessSection />
      <WhyMeridian />
      <IndustriesPreview />
      <HiringProcessTimeline />
      <ContactCTA />
    </>
  );
}
