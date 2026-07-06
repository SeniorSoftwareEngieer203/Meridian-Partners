import Link from "next/link";
import { siteContent } from "@/content/site";
import { LogoLink } from "./Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { footer } = siteContent.navigation;

  return (
    <footer className="border-t border-border bg-brand-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LogoLink size="md" nameClassName="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {siteContent.company.mission}
            </p>
            <div className="mt-6 flex gap-5">
              {footer.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: footer.company },
            { title: "Services", links: footer.services },
            { title: "Careers", links: footer.careers },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteContent.company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footer.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/40 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
