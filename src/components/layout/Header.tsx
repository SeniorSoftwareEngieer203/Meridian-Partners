"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site";
import { LogoLink } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <LogoLink size="md" showName nameClassName="hidden sm:inline" />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {siteContent.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Hire Talent
          </Button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className={cn("overflow-hidden border-t border-border lg:hidden", mobileOpen ? "max-h-96" : "max-h-0")}>
        <nav className="flex flex-col gap-0.5 bg-background p-4" aria-label="Mobile navigation">
          {siteContent.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2 px-2">
            <ThemeToggle />
            <Button href="/contact" size="sm" className="flex-1">Hire Talent</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
